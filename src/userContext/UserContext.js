import SchemaContext from "./schemaContext/SchemaContext";
import createSchemaFactory from "../actions/createSchemaFactory";
import throwIfNoSync from "../throwIfNoSync";
import getUserContextFactory from "./getUserContextFactory";

export default class UserContext {
    constructor(userId, modelManager) {
        this._userContextAction = getUserContextFactory(userId, modelManager);
        this._modelManager = modelManager;
    }

    createSchema(schemaName) {
        const createSchemaAction = createSchemaFactory(schemaName, this._modelManager);
        return throwIfNoSync(this._modelManager)
            .then(() => createSchemaAction())
            .then(schema => schema.toJSON());
    }

    setSchema(schemaId) {
        return new SchemaContext(schemaId, this._userContextAction, this._modelManager);
    }

    createUser() {
        return false;
    }
}
