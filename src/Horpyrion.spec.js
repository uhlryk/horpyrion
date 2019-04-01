import Horpyrion from "./Horpyrion";
import Promise from "bluebird";

describe("Horpyrion", () => {
    it("should create instance from configuration", () => {
        const horpyrion = new Horpyrion(DB_CONFIGURATION);
        expect(horpyrion).to.be.instanceof(Horpyrion);
    });
    describe("when instance exist", () => {
        let horpyrion;
        beforeEach(() => {
            horpyrion = new Horpyrion(DB_CONFIGURATION);
        });

        afterEach(() => {
            return new Promise(resolve => horpyrion.getDb().dropDatabase(() => resolve())).then(() =>
                horpyrion.disconnect()
            );
        });

        it("should connect to database", () => {
            return horpyrion.connect({ force: true });
        });

        it("should connect to database and create init data", () => {
            return horpyrion.connect(
                { force: true },
                horpyrion => {
                    return horpyrion
                        .setRootUser()
                        .createSchema("SOME_RESOURCE")
                        .then(schemaId => {
                            expect(schemaId).to.be.a.uuid("v4");
                        });
                }
            );
        });

        xdescribe("when not connected to database", () => {
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
    });
});
