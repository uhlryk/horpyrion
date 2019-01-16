import RecordContext from "./RecordContext";
import getContextSchemaFactory from "./contextActions/getContextSchemaFactory";
import createSchemaFactory from "./actions/createSchemaFactory";
import throwIfNoSync from "./throwIfNoSync";

export default class UserAndSchemaContext {
    constructor(contextUserAction, modelManager) {
        this._userAction = contextUserAction;
        this._modelManager = modelManager;
    }

    createSchema(schemaName) {
        const schemaAction = createSchemaFactory(schemaName, this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => schemaAction())
            .then(schema => schema.toJSON());
    }

    setSchema(schemaName) {
        const contextSchemaAction = getContextSchemaFactory(schemaName, this._modelManager);
        return new RecordContext(this._userAction, contextSchemaAction, this._modelManager);
    }

    createUser() {
        return false;
    }
}
