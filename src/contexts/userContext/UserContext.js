import SchemaContext from "../schemaContext/SchemaContext";
import getUserContextFactory from "./contextActions/getUserContextFactory";
import createFactory from "../actions/createFactory";
import UserSchemaContext from "../userSchemaContext/UserSchemaContext";

export default class UserContext {
    constructor(userId, contextAction, modelManager) {
        this._contextAction = contextAction.createContextAction("user", getUserContextFactory(userId));
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
        return new SchemaContext(schemaId, this._contextAction, this._modelManager);
    }

    setUserSchema() {
        return new UserSchemaContext(this._contextAction, this._modelManager);
    }

    getData() {
        return this._contextAction.resolve().then(({ user }) => user);
    }
}
