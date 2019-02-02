import throwIfNoSync from "../throwIfNoSync";
import createUserRecordFactory from "./actions/createUserRecordFactory";
import updateUserRecordFactory from "./actions/updateUserRecordFactory";

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
}
