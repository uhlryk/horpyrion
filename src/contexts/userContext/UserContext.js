import SchemaContext from "../schemaContext/SchemaContext";
import createFactory from "../actions/createFactory";
import throwIfNoSync from "../../throwIfNoSync";
import UserSchemaContext from "../userSchemaContext/UserSchemaContext";

export default class UserContext {
    constructor(userId, contextAction, modelManager) {
        this._contextAction = contextAction.createContextAction("user", userId, "User");
        this._modelManager = modelManager;
    }

    createSchema(schemaName) {
        const createSchemaAction = createFactory("Schema", this._modelManager);
        return this._contextAction
            .resolve()
            .then(() => createSchemaAction({ name: schemaName }))
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
