import Promise from "bluebird";
import Horpyrion from "./Horpyrion";
import UserSchemaContext from "./contexts/userContext/userSchemaContext/UserSchemaContext";
import SchemaContext from "./contexts/userContext/schemaContext/SchemaContext";
describe("Horpyrion root user context", () => {
    let horpyrion;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion.connect({ force: true });
    });

    afterEach(() => {
        return new Promise(resolve => horpyrion.getDb().dropDatabase(() => resolve())).then(() =>
            horpyrion.disconnect()
        );
    });

    it("should insert and return schema id", () => {
        return horpyrion
            .setRootUser()
            .insertSchema("SOME_RESOURCE")
            .then(schemaId => {
                expect(schemaId).to.be.a.uuid("v4");
            });
    });

    it("should return user schema context", () => {
        const userSchemaContext = horpyrion.setRootUser().setUserSchema();
        expect(userSchemaContext).to.be.instanceof(UserSchemaContext);
    });

    xdescribe("Schema doesn't exist", function() {
        it("should throw error", () => {
            const userSchemaContext = horpyrion.setRootUser().setSchema("NON_EXIST_SCHEMA_ID");
            expect(userSchemaContext).to.be.instanceof(SchemaContext);
        });
    });

    describe("Schema exist", () => {
        let SCHEMA_ID;
        beforeEach(() => {
            return horpyrion
                .setRootUser()
                .insertSchema("SOME_RESOURCE")
                .then(schema => {
                    SCHEMA_ID = schema.id;
                });
        });

        it("should return schema context", () => {
            const userSchemaContext = horpyrion.setRootUser().setSchema(SCHEMA_ID);
            expect(userSchemaContext).to.be.instanceof(SchemaContext);
        });

        it("should return schema list", () => {
            return horpyrion
                .setRootUser()
                .getSchemas()
                .then(resp => {
                    expect(resp).to.containSubset([
                        {
                            id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                            name: "SOME_RESOURCE"
                        }
                    ]);
                });
        });
    });
});
