import throwIfNoSync from "../../throwIfNoSync";
import createFactory from "../actions/createFactory";
import getFactory from "../actions/getFactory";
import updateUserRecordFactory from "./actions/updateUserRecordFactory";
import getListFactory from "../actions/getListFactory";

export default class UserSchemaContext {
    constructor(userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._modelManager = modelManager;
    }

    createRecord(name) {
        const createUserRecordAction = createFactory("User", { name: name }, this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => createUserRecordAction())
            .then(user => user.toJSON());
    }

    updateRecord(recordId, data) {
        const updateUserRecordAction = updateUserRecordFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => updateUserRecordAction(recordId))
            .then(() => true);
    }

    getRecord(userId) {
        const getUserRecordAction = getFactory("User", userId, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => getUserRecordAction())
            .then(userRecord => {
                if (userRecord) {
                    return userRecord;
                } else {
                    return null;
                }
            });
    }

    getRecords(query) {
        const getUserRecordListAction = getListFactory("User", query, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => getUserRecordListAction())
            .then(userRecordList => userRecordList);
    }
}
