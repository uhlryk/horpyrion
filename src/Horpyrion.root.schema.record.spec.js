import Horpyrion from "./Horpyrion";

describe("Horpyrion root user and schema context and record context", () => {
    let horpyrion;
    let SCHEMA_ID;
    let RECORD_ID;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion
            .sync({ force: true })
            .then(() => {
                return horpyrion.setRootUser().createSchema("SOME_RESOURCE");
            })
            .then(schema => {
                SCHEMA_ID = schema.id;
                return horpyrion
                    .setRootUser()
                    .setSchema(SCHEMA_ID)
                    .createRecord({
                        testA: "AAA",
                        testB: "BBB"
                    });
            })
            .then(record => {
                RECORD_ID = record.id;
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
                    id: expectedValue => expectedValue,
                    data: { testA: "AAA", testB: "BBB" },
                    UserId: null,
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
                            UserId: null,
                            SchemaId: expectedValue => expectedValue
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