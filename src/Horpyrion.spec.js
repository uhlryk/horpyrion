import Horpyrion from "./Horpyrion";
import Sequelize from "sequelize";

describe("Horpyrion", () => {
    it("should create instance from configuration", () => {
        const horpyrion = new Horpyrion(DB_CONFIGURATION);
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });
    it("should create instance from sequelize instance", () => {
        const sequelize = new Sequelize(DB_CONFIGURATION.dbname, DB_CONFIGURATION.user, DB_CONFIGURATION.password, {
            dialect: DB_CONFIGURATION.type,
            port: DB_CONFIGURATION.port,
            host: DB_CONFIGURATION.host,
            logging: DB_CONFIGURATION.logging
        });
        const horpyrion = new Horpyrion(sequelize);
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });
    describe("when instance exist", () => {
        let horpyrion;
        beforeEach(() => {
            horpyrion = new Horpyrion(DB_CONFIGURATION);
        });
        it("should connect to database", async () => {
            await horpyrion.sync({ force: true });
        });

        describe("when not connected to database", () => {
            it("should throw error", () => {
                return horpyrion
                    .setRootUser()
                    .createSchema("SOME_RESOURCE")
                    .then(() => {
                        expect.fail();
                    })
                    .catch(err => {
                        expect(err.message).to.be.eql("No synchronization with database. Run sync() method");
                    });
            });
        });

        describe("when connected to database", () => {
            beforeEach(async () => {
                await horpyrion.sync({ force: true });
            });

            it("should return sequelize instance", () => {
                expect(horpyrion.getDbInstance()).to.be.instanceOf(Sequelize);
            });

            describe("when there is root user context", () => {
                describe("when creating schema", () => {
                    it("should return schema data", () => {
                        return horpyrion
                            .setRootUser()
                            .createSchema("SOME_RESOURCE")
                            .then(resp => {
                                expect(resp).to.deep.include({
                                    id: 1,
                                    name: "SOME_RESOURCE",
                                    UserId: null
                                });
                            });
                    });
                });
                describe("when there is specific schema context", () => {
                    let SCHEMA_ID;
                    beforeEach(() => {
                        return horpyrion
                            .setRootUser()
                            .createSchema("SOME_RESOURCE")
                            .then(schema => {
                                SCHEMA_ID = schema.id;
                            });
                    });

                    describe("when creating attribute", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema(SCHEMA_ID)
                                .addAttribute("SOME_ATTRIBUTE", "SOME_TYPE")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when creating record", () => {
                        it("should return record data", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema(SCHEMA_ID)
                                .createRecord({
                                    testA: "AAA",
                                    testB: "BBB"
                                })
                                .then(resp => {
                                    expect(resp).to.deep.include({
                                        id: 1,
                                        SchemaId: 1,
                                        data: {
                                            testA: "AAA",
                                            testB: "BBB"
                                        },
                                        UserId: null
                                    });
                                });
                        });
                    });

                    describe("when no records in database", () => {
                        describe("when getting records", () => {
                            it("should return empty array", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecords()
                                    .then(resp => {
                                        expect(resp).be.eql([]);
                                    });
                            });
                        });

                        describe("when getting record", () => {
                            it("should return null", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecord(1)
                                    .then(resp => {
                                        expect(resp).be.equal(null);
                                    });
                            });
                        });
                    });
                    describe("when records are in database", () => {
                        let RECORD_ID;
                        beforeEach(() => {
                            return Promise.all([
                                horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .createRecord({
                                        testA: "AAA1",
                                        testB: "BBB1"
                                    }),
                                horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .createRecord({
                                        testA: "AAA2",
                                        testB: "BBB2"
                                    })
                            ]).then(records => {
                                RECORD_ID = records[0].id;
                            });
                        });
                        describe("when getting records", () => {
                            it("should return array of records", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecords()
                                    .then(resp => {
                                        expect(resp).to.containSubset([
                                            {
                                                id: 1,
                                                data: { testA: "AAA1", testB: "BBB1" },
                                                UserId: null,
                                                SchemaId: 1
                                            },
                                            {
                                                id: 2,
                                                data: { testA: "AAA2", testB: "BBB2" },
                                                UserId: null,
                                                SchemaId: 1
                                            }
                                        ]);
                                    });
                            });

                            describe("when record context is set", () => {
                                describe("when updating record", () => {
                                    it("should return updated record", () => {
                                        return horpyrion
                                            .setRootUser()
                                            .setSchema(SCHEMA_ID)
                                            .setRecord(RECORD_ID)
                                            .updateRecord({
                                                testA: "AAA2",
                                                testB: "BBB2"
                                            })
                                            .then(() => {
                                                return horpyrion
                                                    .setRootUser()
                                                    .setSchema(SCHEMA_ID)
                                                    .getRecord(RECORD_ID)
                                                    .then(resp => {
                                                        expect(resp).to.deep.include({
                                                            id: RECORD_ID,
                                                            data: { testA: "AAA2", testB: "BBB2" },
                                                            UserId: null,
                                                            SchemaId: 1
                                                        });
                                                    });
                                            });
                                    });
                                });
                            });
                        });

                        describe("when getting record", () => {
                            it("should return null", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecord(RECORD_ID)
                                    .then(resp => {
                                        expect(resp).to.deep.include({
                                            id: RECORD_ID,
                                            data: { testA: "AAA1", testB: "BBB1" },
                                            UserId: null,
                                            SchemaId: 1
                                        });
                                    });
                            });
                        });
                    });

                    describe("when updating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema(SCHEMA_ID)
                                .updateRecord()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when getting attributes", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema(SCHEMA_ID)
                                .getAttributes()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                });
            });

            describe("when there is standard user context", () => {
                const USER_ID = "USER_ID";
                let SCHEMA_ID;
                describe("when creating schema", () => {
                    it("should return schema data", () => {
                        return horpyrion
                            .setUser(USER_ID)
                            .createSchema("SOME_RESOURCE")
                            .then(resp => {
                                expect(resp).to.deep.include({
                                    id: 1,
                                    name: "SOME_RESOURCE",
                                    UserId: null
                                });
                            });
                    });
                });
                describe("when there is specific schema context", () => {
                    beforeEach(() => {
                        return horpyrion
                            .setRootUser()
                            .createSchema("SOME_RESOURCE")
                            .then(schema => {
                                SCHEMA_ID = schema.id;
                            });
                    });
                    describe("when creating attribute", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema(SCHEMA_ID)
                                .addAttribute("SOME_ATTRIBUTE", "SOME_TYPE")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when creating record", () => {
                        it("should return record data", () => {
                            return horpyrion
                                .setUser()
                                .setSchema(SCHEMA_ID)
                                .createRecord({
                                    testA: "AAA",
                                    testB: "BBB"
                                })
                                .then(resp => {
                                    expect(resp).to.deep.include({
                                        id: 1,
                                        SchemaId: 1,
                                        data: {
                                            testA: "AAA",
                                            testB: "BBB"
                                        },
                                        UserId: null
                                    });
                                });
                        });
                    });

                    describe("when no records in database", () => {
                        describe("when getting records", () => {
                            it("should return empty array", () => {
                                return horpyrion
                                    .setUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecords()
                                    .then(resp => {
                                        expect(resp).be.eql([]);
                                    });
                            });
                        });

                        describe("when getting record", () => {
                            it("should return null", () => {
                                return horpyrion
                                    .setUser(USER_ID)
                                    .setSchema(SCHEMA_ID)
                                    .getRecord(1)
                                    .then(resp => {
                                        expect(resp).be.equal(null);
                                    });
                            });
                        });
                    });

                    describe("when records are in database", () => {
                        let RECORD_ID;
                        beforeEach(() => {
                            return Promise.all([
                                horpyrion
                                    .setUser()
                                    .setSchema(SCHEMA_ID)
                                    .createRecord({
                                        testA: "AAA1",
                                        testB: "BBB1"
                                    }),
                                horpyrion
                                    .setUser()
                                    .setSchema(SCHEMA_ID)
                                    .createRecord({
                                        testA: "AAA2",
                                        testB: "BBB2"
                                    })
                            ]).then(records => {
                                RECORD_ID = records[0].id;
                            });
                        });
                        describe("when getting records", () => {
                            it("should return array of records", () => {
                                return horpyrion
                                    .setUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecords()
                                    .then(resp => {
                                        expect(resp).to.containSubset([
                                            {
                                                id: 1,
                                                data: { testA: "AAA1", testB: "BBB1" },
                                                UserId: null,
                                                SchemaId: 1
                                            },
                                            {
                                                id: 2,
                                                data: { testA: "AAA2", testB: "BBB2" },
                                                UserId: null,
                                                SchemaId: 1
                                            }
                                        ]);
                                    });
                            });

                            describe("when record context is set", () => {
                                describe("when updating record", () => {
                                    it("should return updated record", () => {
                                        return horpyrion
                                            .setUser()
                                            .setSchema(SCHEMA_ID)
                                            .setRecord(RECORD_ID)
                                            .updateRecord({
                                                testA: "AAA2",
                                                testB: "BBB2"
                                            })
                                            .then(() => {
                                                return horpyrion
                                                    .setRootUser()
                                                    .setSchema(SCHEMA_ID)
                                                    .getRecord(RECORD_ID)
                                                    .then(resp => {
                                                        expect(resp).to.deep.include({
                                                            id: RECORD_ID,
                                                            data: { testA: "AAA2", testB: "BBB2" },
                                                            UserId: null,
                                                            SchemaId: 1
                                                        });
                                                    });
                                            });
                                    });
                                });
                            });
                        });

                        describe("when getting record", () => {
                            it("should return null", () => {
                                return horpyrion
                                    .setUser(USER_ID)
                                    .setSchema(SCHEMA_ID)
                                    .getRecord(RECORD_ID)
                                    .then(resp => {
                                        expect(resp).to.deep.include({
                                            id: RECORD_ID,
                                            data: { testA: "AAA1", testB: "BBB1" },
                                            UserId: null,
                                            SchemaId: 1
                                        });
                                    });
                            });
                        });
                    });

                    describe("when updating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema(SCHEMA_ID)
                                .updateRecord()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when getting attributes", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema(SCHEMA_ID)
                                .getAttributes()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                });
            });
        });
    });
});
