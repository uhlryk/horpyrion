import Context from "../../Context";
import UserRecordContext from "./userRecordContext/UserRecordContext";

export default class UserSchemaContext extends Context {
    constructor(id, contextAction, modelManager) {
        super({
            name: "userSchema",
            contextAction,
            modelManager
        });
    }

    setUserRecord(userRecordId) {
        return new UserRecordContext(userRecordId, this._contextAction, this._modelManager);
    }

    createRecord(name) {
        return this.resolveContextAction()
            .then(() => this.createFactory("User")({ name: name }))
            .then(user => user.toJSON());
    }

    updateRecord(recordId, data) {
        return this.resolveContextAction()
            .then(() => this.updateFactory("User")(recordId, data))
            .then(() => true);
    }

    getRecord(userId) {
        return this.resolveContextAction()
            .then(() => this.getFactory("User")(userId))
            .then(userRecord => {
                if (userRecord) {
                    return userRecord;
                } else {
                    return null;
                }
            });
    }

    getRecords(query) {
        return this.resolveContextAction()
            .then(() => this.getListFactory("User")(query))
            .then(userRecordList => userRecordList);
    }
}
