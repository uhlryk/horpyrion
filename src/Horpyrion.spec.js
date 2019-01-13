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
                    beforeEach(() => {
                        return horpyrion.setRootUser().createSchema("SOME_RESOURCE");
                    });

                    describe("when creating attribute", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema("SOME_RESOURCE")
                                .addAttribute("SOME_ATTRIBUTE", "SOME_TYPE")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema("SOME_RESOURCE")
                                .getRecord("SOME_RECORD_ID")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting records", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema("SOME_RESOURCE")
                                .getRecords()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when creating record", () => {
                        it("should return record data", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema("SOME_RESOURCE")
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
                    describe("when updating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setRootUser()
                                .setSchema("SOME_RESOURCE")
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
                                .setSchema("SOME_RESOURCE")
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
                        return horpyrion.setRootUser().createSchema("SOME_RESOURCE");
                    });
                    describe("when creating attribute", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema("SOME_RESOURCE")
                                .addAttribute("SOME_ATTRIBUTE", "SOME_TYPE")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema("SOME_RESOURCE")
                                .getRecord("SOME_RECORD_ID")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting records", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema("SOME_RESOURCE")
                                .getRecords()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when creating record", () => {
                        it("should return record data", () => {
                            return horpyrion
                                .setUser()
                                .setSchema("SOME_RESOURCE")
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
                    describe("when updating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .setUser(USER_ID)
                                .setSchema("SOME_RESOURCE")
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
                                .setSchema("SOME_RESOURCE")
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
