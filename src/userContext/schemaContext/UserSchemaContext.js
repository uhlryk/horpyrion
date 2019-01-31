import throwIfNoSync from "../../throwIfNoSync";
import createUserFactory from "../../actions/createUserFactory";
import updateUserFactory from "../../actions/updateUserFactory";

export default class UserSchemaContext {
    constructor(userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._modelManager = modelManager;
    }

    createRecord(data) {
        const createUserAction = createUserFactory(data, this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => createUserAction())
            .then(user => user.toJSON());
    }

    updateRecord(recordId, data) {
        const updateUserAction = updateUserFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => updateUserAction(recordId))
            .then(() => true);
    }
}
