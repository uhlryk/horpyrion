import Horpyrion from "./Horpyrion";

describe("Horpyrion root user and user schema context and record context", () => {
    let horpyrion;
    let USER_ID;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion
            .connect({ force: true })
            .then(() => {
                return horpyrion
                    .setRootUser()
                    .setUserSchema()
                    .insertRecord("SOME_USER");
            })
            .then(userId => {
                USER_ID = userId;
            });
    });

    it("should return record data", () => {
        return horpyrion
            .setUser()
            .setUserSchema()
            .setUserRecord(USER_ID)
            .getData()
            .then(resp => {
                expect(resp).to.containSubset({
                    id: expectedValue => expect(expectedValue).to.be.a.uuid("v4"),
                    name: "SOME_USER"
                });
            });
    });

    it("should update user record", () => {
        return horpyrion
            .setRootUser()
            .setUserSchema()
            .setUserRecord(USER_ID)
            .updateRecord({ name: "SOME_USER" })
            .then(resp => {
                expect(resp).to.be.true();
            });
    });

    it("should remove user record", () => {
        return horpyrion
            .setRootUser()
            .setUserSchema()
            .setUserRecord(USER_ID)
            .removeRecord()
            .then(resp => {
                expect(resp).to.be.true();
            });
    });
});
