import Horpyrion from "./Horpyrion";
import UserSchemaContext from "./contexts/userContext/userSchemaContext/UserSchemaContext";
import SchemaContext from "./contexts/userContext/schemaContext/SchemaContext";
describe("Horpyrion root user context", () => {
    let horpyrion;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion.sync({ force: true });
    });

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
                .createSchema("SOME_RESOURCE")
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
                            id: expectedValue => expectedValue,
                            name: "SOME_RESOURCE",
                            UserId: null
                        }
                    ]);
                });
        });
    });
});