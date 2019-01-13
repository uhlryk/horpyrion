import RecordContext from "./RecordContext";
import getSchemaFactory from "./actions/getSchemaFactory";
import createSchemaFactory from "./actions/createSchemaFactory";
import throwIfNoSync from "./throwIfNoSync";

export default class UserAndSchemaContext {
    constructor(userAction, modelManager) {
        this._userAction = userAction;
        this._modelManager = modelManager;
    }

    createSchema(schemaName) {
        const schemaAction = createSchemaFactory(schemaName, this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => schemaAction())
            .then(schema => schema.toJSON());
    }

    setSchema(schemaName) {
        const schemaAction = getSchemaFactory(schemaName, this._modelManager);
        return new RecordContext(this._userAction, schemaAction, this._modelManager);
    }

    createUser() {
        return false;
    }
}
