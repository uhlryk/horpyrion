import throwIfNoSync from "../../throwIfNoSync";
import createFactory from "../actions/createFactory";
import updateUserRecordFactory from "./actions/updateUserRecordFactory";
import getUserRecordFactory from "./actions/getUserRecordFactory";
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

    getRecord(recordId) {
        const getUserRecordAction = getUserRecordFactory(recordId, this._modelManager);

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
