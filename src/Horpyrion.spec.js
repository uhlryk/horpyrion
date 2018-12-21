import Horpyrion from "./Horpyrion";

const dbConfiguration = {
    type: "postgres",
    host: "localhost",
    dbname: "test",
    user: "test",
    pass: "test",
    port: "5432"
};
describe("Horpyrion", () => {
    it("should create instance", () => {
        const horpyrion = new Horpyrion(dbConfiguration);
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });

    describe("when instance exist", () => {
        let horpyrion;
        beforeEach(() => {
            horpyrion = new Horpyrion(dbConfiguration);
        });
        it("should connect to database", async () => {
            await horpyrion.sync();
        });

        describe("when there is root user context", () => {
            describe("when creating resource", () => {
                it("should return false", () => {
                    return horpyrion
                        .getRootUser()
                        .createResource("SOME_RESOURCE")
                        .then(resp => {
                            expect(resp).be.false();
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
                it("should return false", () => {
                    return horpyrion
                        .getUser(USER_ID)
                        .createResource("SOME_RESOURCE")
                        .then(resp => {
                            expect(resp).be.false();
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
