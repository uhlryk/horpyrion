import Horpyrion from "./Horpyrion";
import Sequelize from "sequelize";

describe("Horpyrion", () => {
    it("should create instance", () => {
        const horpyrion = new Horpyrion(DB_CONFIGURATION);
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
                    .getRootUser()
                    .createResource("SOME_RESOURCE")
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
                describe("when creating resource", () => {
                    it("should return false", () => {
                        return horpyrion
                            .getRootUser()
                            .createResource("SOME_RESOURCE")
                            .then(resp => {
                                expect(resp).be.equal(1);
                            });
                    });
                });
                describe("when there is specific resource context", () => {
                    describe("when creating attribute", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getRootUser()
                                .getResource("SOME_RESOURCE")
                                .addAttribute("SOME_ATTRIBUTE", "SOME_TYPE")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getRootUser()
                                .getResource("SOME_RESOURCE")
                                .getRecord("SOME_RECORD_ID")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting records", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getRootUser()
                                .getResource("SOME_RESOURCE")
                                .getRecords()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when creating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getRootUser()
                                .getResource("SOME_RESOURCE")
                                .createRecord()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when updating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getRootUser()
                                .getResource("SOME_RESOURCE")
                                .updateRecord()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when getting attributes", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getRootUser()
                                .getResource("SOME_RESOURCE")
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
                describe("when creating resource", () => {
                    it("should return 1", () => {
                        return horpyrion
                            .getUser(USER_ID)
                            .createResource("SOME_RESOURCE")
                            .then(resp => {
                                expect(resp).be.equal(1);
                            });
                    });
                });
                describe("when there is specific resource context", () => {
                    describe("when creating attribute", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getUser(USER_ID)
                                .getResource("SOME_RESOURCE")
                                .addAttribute("SOME_ATTRIBUTE", "SOME_TYPE")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getUser(USER_ID)
                                .getResource("SOME_RESOURCE")
                                .getRecord("SOME_RECORD_ID")
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });

                    describe("when getting records", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getUser(USER_ID)
                                .getResource("SOME_RESOURCE")
                                .getRecords()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when creating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getUser(USER_ID)
                                .getResource("SOME_RESOURCE")
                                .createRecord()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when updating record", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getUser(USER_ID)
                                .getResource("SOME_RESOURCE")
                                .updateRecord()
                                .then(resp => {
                                    expect(resp).be.false();
                                });
                        });
                    });
                    describe("when getting attributes", () => {
                        it("should return false", () => {
                            return horpyrion
                                .getUser(USER_ID)
                                .getResource("SOME_RESOURCE")
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
