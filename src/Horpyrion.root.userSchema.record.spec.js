import Horpyrion from "./Horpyrion";
import Promise from "bluebird";

describe("Horpyrion root user and user schema context and record context", () => {
    let horpyrion;
    let USER_ID;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion
            .connect()
            .then(() => {
                return horpyrion
                    .setRootUser()
                    .setUserSchema()
                    .insertRecord({ name: "SOME_USER" });
            })
            .then(userId => {
                USER_ID = userId;
            });
    });

    afterEach(() => {
        return new Promise(resolve => horpyrion.getDb().dropDatabase(() => resolve())).then(() =>
            horpyrion.disconnect()
        );
    });

    it("should return record data", () => {
        return horpyrion
            .setUser()
            .setUserSchema()
            .setRecord(USER_ID)
            .getData()
            .then(resp => {
                expect(resp).to.containSubset({
                    id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                    SchemaId: "SYSTEM_USER",
                    data: { name: "SOME_USER" }
                });
            });
    });

    it("should update user record", () => {
        return horpyrion
            .setRootUser()
            .setUserSchema()
            .setRecord(USER_ID)
            .updateRecord({ name: "SOME_USER" })
            .then(resp => {
                expect(resp).to.be.true();
            });
    });

    it("should remove user record", () => {
        return horpyrion
            .setRootUser()
            .setUserSchema()
            .setRecord(USER_ID)
            .removeRecord()
            .then(resp => {
                expect(resp).to.be.true();
            });
    });
});
