import throwIfNoSync from "../../throwIfNoSync";
import createFactory from "../actions/createFactory";
import getFactory from "../actions/getFactory";
import updateFactory from "../actions/updateFactory";
import getListFactory from "../actions/getListFactory";

export default class UserSchemaContext {
    constructor(userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._modelManager = modelManager;
    }

    createRecord(name) {
        const createUserRecordAction = createFactory("User", this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => createUserRecordAction({ name: name }))
            .then(user => user.toJSON());
    }

    updateRecord(recordId, data) {
        const updateUserRecordAction = updateFactory("User", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => updateUserRecordAction(recordId, data))
            .then(() => true);
    }

    getRecord(userId) {
        const getUserRecordAction = getFactory("User", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => getUserRecordAction(userId))
            .then(userRecord => {
                if (userRecord) {
                    return userRecord;
                } else {
                    return null;
                }
            });
    }

    getRecords(query) {
        const getUserRecordListAction = getListFactory("User", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => getUserRecordListAction(query))
            .then(userRecordList => userRecordList);
    }
}
