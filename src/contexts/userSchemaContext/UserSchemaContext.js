import throwIfNoSync from "../../throwIfNoSync";
import createUserRecordFactory from "./actions/createUserRecordFactory";
import updateUserRecordFactory from "./actions/updateUserRecordFactory";
import getUserRecordFactory from "./actions/getUserRecordFactory";
import getUserRecordListFactory from "./actions/getUserRecordListFactory";

export default class UserSchemaContext {
    constructor(userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._modelManager = modelManager;
    }

    createRecord(data) {
        const createUserRecordAction = createUserRecordFactory(data, this._modelManager);
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
        const getUserRecordListAction = getUserRecordListFactory(query, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => getUserRecordListAction())
            .then(userRecordList => userRecordList);
    }
}
