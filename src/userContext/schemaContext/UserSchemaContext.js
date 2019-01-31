import throwIfNoSync from "../../throwIfNoSync";
import createUserFactory from "../../actions/createUserFactory";

export default class UserSchemaContext {
    constructor(userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._modelManager = modelManager;
    }

    createRecord(userName) {
        const createUserAction = createUserFactory(userName, this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => createUserAction())
            .then(user => user.toJSON());
    }
}
