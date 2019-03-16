import Horpyrion from "./Horpyrion";
import RecordContext from "./contexts/userContext/schemaContext/recordContext/RecordContext";
import SchemaContext from "./contexts/userContext/schemaContext/SchemaContext";
describe("Horpyrion root user and schema context", () => {
    let horpyrion;
    let SCHEMA_ID;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion
            .sync({ force: true })
            .then(() => {
                return horpyrion.setRootUser().createSchema("SOME_RESOURCE");
            })
            .then(schema => {
                SCHEMA_ID = schema.id;
            });
    });

    it("should update schema", () => {
        return horpyrion
            .setRootUser()
            .setSchema(SCHEMA_ID)
            .updateSchema("SOME_OTHER_RESOURCE")
            .then(resp => {
                expect(resp).to.true();
            });
    });

    it("should remove schema", () => {
        return horpyrion
            .setRootUser()
            .setSchema(SCHEMA_ID)
            .removeSchema()
            .then(resp => {
                expect(resp).to.true();
            });
    });

    it("should create record data", () => {
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

    xdescribe("Record doesn't exist", function() {
        it("should throw error", () => {
            const recordContext = horpyrion
                .setRootUser()
                .setSchema(SCHEMA_ID)
                .setRecord("NON_EXIST_RECORD_ID");
            expect(recordContext).to.be.instanceof(SchemaContext);
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

        it("should return record context", () => {
            const recordContext = horpyrion
                .setRootUser()
                .setSchema(SCHEMA_ID)
                .setRecord(RECORD_ID);
            expect(recordContext).to.be.instanceof(RecordContext);
        });
    });
});
