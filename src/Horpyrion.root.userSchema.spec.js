import Horpyrion from "./Horpyrion";
import UserRecordContext from "./contexts/userContext/userSchemaContext/userRecordContext/UserRecordContext";
describe("Horpyrion root user and user schema context", () => {
    let horpyrion;
    beforeEach(() => {
        horpyrion = new Horpyrion(DB_CONFIGURATION);
        return horpyrion.connect({ force: true });
    });

    xit("should return schema data", () => {
        return horpyrion
            .setRootUser()
            .setUserSchema()
            .getData()
            .then(resp => {});
    });

    it("should insert and return id", () => {
        return horpyrion
            .setRootUser()
            .setUserSchema()
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
                .setUserSchema()
                .insertRecord("SOME_USER")
                .then(userId => {
                    USER_ID = userId;
                });
        });

        it("should return user record list", () => {
            return horpyrion
                .setRootUser()
                .setUserSchema()
                .getRecords()
                .then(resp => {
                    expect(resp).to.containSubset([
                        {
                            id: USER_ID,
                            name: "SOME_USER"
                        }
                    ]);
                });
        });

        it("should return user record context", () => {
            const userRecordContext = horpyrion
                .setRootUser()
                .setUserSchema()
                .setUserRecord(USER_ID);
            expect(userRecordContext).to.be.instanceof(UserRecordContext);
        });
    });
});
