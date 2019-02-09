import SchemaContext from "../schemaContext/SchemaContext";
import createFactory from "../actions/createFactory";
import throwIfNoSync from "../../throwIfNoSync";
import getUserContextFactory from "./contextActions/getUserContextFactory";
import UserSchemaContext from "../userSchemaContext/UserSchemaContext";

export default class UserContext {
    constructor(userId, modelManager) {
        this._userContextAction = getUserContextFactory(userId, modelManager);
        this._modelManager = modelManager;
    }

    createSchema(schemaName) {
        const createSchemaAction = createFactory("Schema", this._modelManager);
        return throwIfNoSync(this._modelManager)
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
