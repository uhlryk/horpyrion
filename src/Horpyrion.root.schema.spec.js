import Promise from "bluebird";
import Horpyrion from "./Horpyrion";
import RecordContext from "./contexts/userContext/schemaContext/recordContext/RecordContext";
import SchemaContext from "./contexts/userContext/schemaContext/SchemaContext";
describe("Horpyrion root user and schema context", () => {
    let horpyrion;
    let SCHEMA_ID;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion
            .connect()
            .then(() => {
                return horpyrion.setRootUser().insertSchema("SOME_RESOURCE");
            })
            .then(schemaId => {
                SCHEMA_ID = schemaId;
            });
    });

    afterEach(() => {
        return new Promise(resolve => horpyrion.getDb().dropDatabase(() => resolve())).then(() =>
            horpyrion.disconnect()
        );
    });

    it("should return schema data", () => {
        return horpyrion
            .setRootUser()
            .setSchema(SCHEMA_ID)
            .getData()
            .then(resp => {
                expect(resp).to.containSubset({
                    id: SCHEMA_ID
                });
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

    it("should insert record data", () => {
        return horpyrion
            .setRootUser()
            .setSchema(SCHEMA_ID)
            .insertRecord({
                testA: "AAA",
                testB: "BBB"
            })
            .then(recordId => {
                expect(recordId).to.be.a.uuid("v4");
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
                    .insertRecord({
                        testA: "AAA1",
                        testB: "BBB1"
                    }),
                horpyrion
                    .setRootUser()
                    .setSchema(SCHEMA_ID)
                    .insertRecord({
                        testA: "AAA2",
                        testB: "BBB2"
                    })
            ]).then(recordIds => {
                RECORD_ID = recordIds[0];
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
                            id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                            data: { testA: "AAA1", testB: "BBB1" },
                            SchemaId: SCHEMA_ID
                        },
                        {
                            id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                            data: { testA: "AAA2", testB: "BBB2" },
                            SchemaId: SCHEMA_ID
                        }
                    ]);
                });
        });

        it("should return record data", () => {
            return horpyrion
                .setUser()
                .setSchema(SCHEMA_ID)
                .getRecord(RECORD_ID)
                .then(resp => {
                    expect(resp).to.containSubset({
                        id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                        data: { testA: "AAA1", testB: "BBB1" },
                        SchemaId: SCHEMA_ID
                    });
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
