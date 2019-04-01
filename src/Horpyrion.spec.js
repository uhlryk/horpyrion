import Horpyrion from "./Horpyrion";
import Sequelize from "sequelize";
import Promise from "bluebird";

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
