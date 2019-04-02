import Horpyrion from "./Horpyrion";

describe("Horpyrion root user and schema context and record context", () => {
    let horpyrion;
    let SCHEMA_ID;
    let RECORD_ID;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion
            .connect({ force: true })
            .then(() => {
                return horpyrion.setRootUser().insertSchema("SOME_RESOURCE");
            })
            .then(schemaId => {
                SCHEMA_ID = schemaId;
                return horpyrion
                    .setRootUser()
                    .setSchema(SCHEMA_ID)
                    .insertRecord({
                        testA: "AAA",
                        testB: "BBB"
                    });
            })
            .then(recordId => {
                RECORD_ID = recordId;
            });
    });

    it("should return record data", () => {
        return horpyrion
            .setUser()
            .setSchema(SCHEMA_ID)
            .setRecord(RECORD_ID)
            .getData()
            .then(resp => {
                expect(resp).to.containSubset({
                    id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                    data: { testA: "AAA", testB: "BBB" },
                    SchemaId: SCHEMA_ID
                });
            });
    });

    it("should update record", () => {
        return horpyrion
            .setUser()
            .setSchema(SCHEMA_ID)
            .setRecord(RECORD_ID)
            .updateRecord({
                testA: "AAA3",
                testB: "BBB3"
            })
            .then(() => {
                return horpyrion
                    .setRootUser()
                    .setSchema(SCHEMA_ID)
                    .setRecord(RECORD_ID)
                    .getData()
                    .then(resp => {
                        expect(resp).to.containSubset({
                            id: RECORD_ID,
                            data: { testA: "AAA3", testB: "BBB3" },
                            SchemaId: expectedValue => expect(expectedValue).to.be.a.uuid("v4")
                        });
                    });
            });
    });

    it("should remove record", () => {
        return horpyrion
            .setRootUser()
            .setSchema(SCHEMA_ID)
            .setRecord(RECORD_ID)
            .removeRecord()
            .then(resp => {
                expect(resp).to.be.true();
                return horpyrion
                    .setRootUser()
                    .setSchema(SCHEMA_ID)
                    .getRecords()
                    .then(resp => {
                        expect(resp.length).to.be.equal(0);
                    });
            });
    });
});
