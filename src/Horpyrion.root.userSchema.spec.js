import Horpyrion from "./Horpyrion";
// import UserRecordContext from "./contexts/userContext/userSchemaContext/userRecordContext/UserRecordContext";
import RecordContext from "./contexts/userContext/schemaContext/recordContext/RecordContext";
import Promise from "bluebird";
describe("Horpyrion root user and user schema context", () => {
    let horpyrion;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion.connect();
    });

    afterEach(() => {
        return new Promise(resolve => horpyrion.getDb().dropDatabase(() => resolve())).then(() =>
            horpyrion.disconnect()
        );
    });

    xit("should return schema data", () => {
        return horpyrion
            .setRootUser()
            .setSchema("SYSTEM_USER")
            .getData()
            .then(resp => {});
    });

    it("should insert and return id", () => {
        return horpyrion
            .setRootUser()
            .setSchema("SYSTEM_USER")
            .insertRecord("SOME_USER")
            .then(userRecordId => {
                expect(userRecordId).to.be.a.uuid("v4");
            });
    });

    describe("when there is user record", () => {
        let USER_ID;
        beforeEach(() => {
            return horpyrion
                .setRootUser()
                .setSchema("SYSTEM_USER")
                .insertRecord({ name: "SOME_USER" })
                .then(userId => {
                    USER_ID = userId;
                });
        });

        it("should return user record list", () => {
            return horpyrion
                .setRootUser()
                .setSchema("SYSTEM_USER")
                .getRecords()
                .then(resp => {
                    expect(resp).to.containSubset([
                        {
                            id: USER_ID,
                            SchemaId: "SYSTEM_USER",
                            data: { name: "SOME_USER" }
                        }
                    ]);
                });
        });

        it("should return user record context", () => {
            const userRecordContext = horpyrion
                .setRootUser()
                .setSchema("SYSTEM_USER")
                .setRecord(USER_ID);
            expect(userRecordContext).to.be.instanceof(RecordContext);
        });
    });
});
