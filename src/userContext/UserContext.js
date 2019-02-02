import SchemaContext from "../schemaContext/SchemaContext";
import createSchemaFactory from "./actions/createSchemaFactory";
import throwIfNoSync from "../throwIfNoSync";
import getUserContextFactory from "./contextActions/getUserContextFactory";
import UserSchemaContext from "../schemaContext/UserSchemaContext";

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

    setUserSchema() {
        return new UserSchemaContext(this._userContextAction, this._modelManager);
    }

    getData() {
        return throwIfNoSync(this._modelManager).then(() => this._userContextAction());
    }
}
