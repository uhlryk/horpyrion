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
        it("should connect to database", () => {
            return horpyrion.sync({ force: true });
        });

        it("should connect to database and create init data", () => {
            return horpyrion.sync({ force: true }, horpyrion => {
                return horpyrion
                    .setRootUser()
                    .createSchema("SOME_RESOURCE")
                    .then(schema => {
                        expect(schema).to.containSubset({
                            id: expectedValue => expectedValue,
                            name: "SOME_RESOURCE",
                            UserId: null
                        });
                    });
            });
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
        });
    });
});
