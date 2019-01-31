import Horpyrion from "./Horpyrion";
import Sequelize from "sequelize";

describe("Horpyrion", () => {
    const SOME_UUID = "11111111-1111-1111-1111-111111111111";
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
                it("should create and return schema data", () => {
                    return horpyrion
                        .setRootUser()
                        .createSchema("SOME_RESOURCE")
                        .then(resp => {
                            expect(resp).to.containSubset({
                                id: expectedValue => expectedValue,
                                name: "SOME_RESOURCE",
                                UserId: null
                            });
                        });
                });
                it("should create and return user data", () => {
                    return horpyrion
                        .setRootUser()
                        .setUserSchema()
                        .createRecord("SOME_USER")
                        .then(resp => {
                            expect(resp).to.containSubset({
                                id: expectedValue => expectedValue,
                                name: "SOME_USER"
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

                    it("should return schema data", () => {
                        return horpyrion
                            .setRootUser()
                            .setSchema(SCHEMA_ID)
                            .getData()
                            .then(resp => {
                                expect(resp).to.containSubset({
                                    id: expectedValue => expectedValue,
                                    name: "SOME_RESOURCE",
                                    UserId: null
                                });
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
                                    expect(resp).to.containSubset({
                                        id: expectedValue => expectedValue,
                                        SchemaId: expectedValue => expectedValue,
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
                                    .getRecord(SOME_UUID)
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
                                                id: expectedValue => expectedValue,
                                                data: { testA: "AAA1", testB: "BBB1" },
                                                UserId: null,
                                                SchemaId: SCHEMA_ID
                                            },
                                            {
                                                id: expectedValue => expectedValue,
                                                data: { testA: "AAA2", testB: "BBB2" },
                                                UserId: null,
                                                SchemaId: SCHEMA_ID
                                            }
                                        ]);
                                    });
                            });
                        });

                        describe("when record context is set", () => {
                            it("should return record data", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .setRecord(RECORD_ID)
                                    .getData()
                                    .then(resp => {
                                        expect(resp).to.containSubset({
                                            id: expectedValue => expectedValue,
                                            data: { testA: "AAA1", testB: "BBB1" },
                                            UserId: null,
                                            SchemaId: SCHEMA_ID
                                        });
                                    });
                            });

                            describe("when updating record", () => {
                                it("should return true", () => {
                                    return horpyrion
                                        .setRootUser()
                                        .setSchema(SCHEMA_ID)
                                        .setRecord(RECORD_ID)
                                        .updateRecord({
                                            testA: "AAA2",
                                            testB: "BBB2"
                                        })
                                        .then(resp => {
                                            expect(resp).to.be.true();
                                            return horpyrion
                                                .setRootUser()
                                                .setSchema(SCHEMA_ID)
                                                .getRecord(RECORD_ID)
                                                .then(resp => {
                                                    expect(resp).to.containSubset({
                                                        id: RECORD_ID,
                                                        data: { testA: "AAA2", testB: "BBB2" },
                                                        UserId: null,
                                                        SchemaId: SCHEMA_ID
                                                    });
                                                });
                                        });
                                });
                            });
                            describe("when removing record", () => {
                                it("should return true", () => {
                                    return horpyrion
                                        .setRootUser()
                                        .setSchema(SCHEMA_ID)
                                        .setRecord(RECORD_ID)
                                        .removeRecord()
                                        .then(resp => {
                                            expect(resp).to.be.true();
                                            return horpyrion
                                                .setRootUser()
                                                .setSchema(SCHEMA_ID)
                                                .getRecords()
                                                .then(resp => {
                                                    expect(resp.length).to.be.equal(1);
                                                    expect(resp).to.containSubset([
                                                        {
                                                            id: expectedValue => expectedValue,
                                                            data: { testA: "AAA2", testB: "BBB2" },
                                                            UserId: null,
                                                            SchemaId: SCHEMA_ID
                                                        }
                                                    ]);
                                                });
                                        });
                                });
                            });
                        });

                        describe("when getting record", () => {
                            it("should return record", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .getRecord(RECORD_ID)
                                    .then(resp => {
                                        expect(resp).to.containSubset({
                                            id: RECORD_ID,
                                            data: { testA: "AAA1", testB: "BBB1" },
                                            UserId: null,
                                            SchemaId: SCHEMA_ID
                                        });
                                    });
                            });
                        });
                        describe("when updating record", () => {
                            it("should return false", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .updateRecord(RECORD_ID, { testA: "AAA3", testB: "BBB3" })
                                    .then(() => {
                                        return horpyrion
                                            .setRootUser()
                                            .setSchema(SCHEMA_ID)
                                            .getRecord(RECORD_ID)
                                            .then(resp => {
                                                expect(resp).to.containSubset({
                                                    id: RECORD_ID,
                                                    data: { testA: "AAA3", testB: "BBB3" },
                                                    UserId: null,
                                                    SchemaId: SCHEMA_ID
                                                });
                                            });
                                    });
                            });
                        });

                        describe("when removing record", () => {
                            it("should return true", () => {
                                return horpyrion
                                    .setRootUser()
                                    .setSchema(SCHEMA_ID)
                                    .removeRecord(RECORD_ID)
                                    .then(resp => {
                                        expect(resp).to.be.true();
                                        return horpyrion
                                            .setRootUser()
                                            .setSchema(SCHEMA_ID)
                                            .getRecords()
                                            .then(resp => {
                                                expect(resp.length).to.be.equal(1);
                                                expect(resp).to.containSubset([
                                                    {
                                                        id: expectedValue => expectedValue,
                                                        data: { testA: "AAA2", testB: "BBB2" },
                                                        UserId: null,
                                                        SchemaId: SCHEMA_ID
                                                    }
                                                ]);
                                            });
                                    });
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
                let USER_ID;
                let SCHEMA_ID;

                beforeEach(() => {
                    return horpyrion
                        .setRootUser()
                        .setUserSchema()
                        .createRecord("SOME_USER")
                        .then(user => {
                            USER_ID = user.id;
                        });
                });

                it("should create and return schema data", () => {
                    return horpyrion
                        .setUser(USER_ID)
                        .createSchema("SOME_RESOURCE")
                        .then(resp => {
                            expect(resp).to.containSubset({
                                id: expectedValue => expectedValue,
                                name: "SOME_RESOURCE",
                                UserId: null
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

                    it("should return schema data", () => {
                        return horpyrion
                            .setUser(USER_ID)
                            .setSchema(SCHEMA_ID)
                            .getData()
                            .then(resp => {
                                expect(resp).to.containSubset({
                                    id: expectedValue => expectedValue,
                                    name: "SOME_RESOURCE",
                                    UserId: null
                                });
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
                                    expect(resp).to.containSubset({
                                        id: expectedValue => expectedValue,
                                        SchemaId: expectedValue => expectedValue,
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
                                    .getRecord(SOME_UUID)
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
                                                id: expectedValue => expectedValue,
                                                data: { testA: "AAA1", testB: "BBB1" },
                                                UserId: null,
                                                SchemaId: expectedValue => expectedValue
                                            },
                                            {
                                                id: expectedValue => expectedValue,
                                                data: { testA: "AAA2", testB: "BBB2" },
                                                UserId: null,
                                                SchemaId: expectedValue => expectedValue
                                            }
                                        ]);
                                    });
                            });
                        });

                        describe("when record context is set", () => {
                            it("should return record data", () => {
                                return horpyrion
                                    .setUser()
                                    .setSchema(SCHEMA_ID)
                                    .setRecord(RECORD_ID)
                                    .getData()
                                    .then(resp => {
                                        expect(resp).to.containSubset({
                                            id: expectedValue => expectedValue,
                                            data: { testA: "AAA1", testB: "BBB1" },
                                            UserId: null,
                                            SchemaId: SCHEMA_ID
                                        });
                                    });
                            });

                            describe("when updating record", () => {
                                it("should return updated record", () => {
                                    return horpyrion
                                        .setUser()
                                        .setSchema(SCHEMA_ID)
                                        .setRecord(RECORD_ID)
                                        .updateRecord({
                                            testA: "AAA3",
                                            testB: "BBB3"
                                        })
                                        .then(() => {
                                            return horpyrion
                                                .setRootUser()
                                                .setSchema(SCHEMA_ID)
                                                .getRecord(RECORD_ID)
                                                .then(resp => {
                                                    expect(resp).to.containSubset({
                                                        id: RECORD_ID,
                                                        data: { testA: "AAA3", testB: "BBB3" },
                                                        UserId: null,
                                                        SchemaId: expectedValue => expectedValue
                                                    });
                                                });
                                        });
                                });
                            });
                            describe("when removing record", () => {
                                it("should return true", () => {
                                    return horpyrion
                                        .setRootUser()
                                        .setSchema(SCHEMA_ID)
                                        .setRecord(RECORD_ID)
                                        .removeRecord()
                                        .then(resp => {
                                            expect(resp).to.be.true();
                                            return horpyrion
                                                .setRootUser()
                                                .setSchema(SCHEMA_ID)
                                                .getRecords()
                                                .then(resp => {
                                                    expect(resp.length).to.be.equal(1);
                                                    expect(resp).to.containSubset([
                                                        {
                                                            id: expectedValue => expectedValue,
                                                            data: { testA: "AAA2", testB: "BBB2" },
                                                            UserId: null,
                                                            SchemaId: expectedValue => expectedValue
                                                        }
                                                    ]);
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
                                        expect(resp).to.containSubset({
                                            id: RECORD_ID,
                                            data: { testA: "AAA1", testB: "BBB1" },
                                            UserId: null,
                                            SchemaId: expectedValue => expectedValue
                                        });
                                    });
                            });
                        });

                        describe("when updating record", () => {
                            it("should return false", () => {
                                return horpyrion
                                    .setUser(USER_ID)
                                    .setSchema(SCHEMA_ID)
                                    .updateRecord(RECORD_ID, { testA: "AAA2", testB: "BBB2" })
                                    .then(resp => {
                                        expect(resp).to.be.true();
                                        return horpyrion
                                            .setRootUser()
                                            .setSchema(SCHEMA_ID)
                                            .getRecord(RECORD_ID)
                                            .then(resp => {
                                                expect(resp).to.containSubset({
                                                    id: RECORD_ID,
                                                    data: { testA: "AAA2", testB: "BBB2" },
                                                    UserId: null,
                                                    SchemaId: expectedValue => expectedValue
                                                });
                                            });
                                    });
                            });
                        });

                        describe("when removing record", () => {
                            it("should return true", () => {
                                return horpyrion
                                    .setUser(USER_ID)
                                    .setSchema(SCHEMA_ID)
                                    .removeRecord(RECORD_ID)
                                    .then(resp => {
                                        expect(resp).to.be.true();
                                        return horpyrion
                                            .setRootUser()
                                            .setSchema(SCHEMA_ID)
                                            .getRecords()
                                            .then(resp => {
                                                expect(resp.length).to.be.equal(1);
                                                expect(resp).to.containSubset([
                                                    {
                                                        id: expectedValue => expectedValue,
                                                        data: { testA: "AAA2", testB: "BBB2" },
                                                        UserId: null,
                                                        SchemaId: expectedValue => expectedValue
                                                    }
                                                ]);
                                            });
                                    });
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
