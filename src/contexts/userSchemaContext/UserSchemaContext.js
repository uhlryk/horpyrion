import createFactory from "../actions/createFactory";
import getFactory from "../actions/getFactory";
import updateFactory from "../actions/updateFactory";
import getListFactory from "../actions/getListFactory";

export default class UserSchemaContext {
    constructor(id, contextAction, modelManager) {
        this._contextAction = contextAction.copyContextAction();
        this._modelManager = modelManager;
    }

    createRecord(name) {
        const createUserRecordAction = createFactory("User", this._modelManager);
        return this._contextAction
            .resolve()
            .then(() => createUserRecordAction({ name: name }))
            .then(user => user.toJSON());
    }

    updateRecord(recordId, data) {
        const updateUserRecordAction = updateFactory("User", this._modelManager);

        return this._contextAction
            .resolve()
            .then(() => updateUserRecordAction(recordId, data))
            .then(() => true);
    }

    getRecord(userId) {
        const getUserRecordAction = getFactory("User", this._modelManager);

        return this._contextAction
            .resolve()
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

        return this._contextAction
            .resolve()
            .then(() => getUserRecordListAction(query))
            .then(userRecordList => userRecordList);
    }
}
