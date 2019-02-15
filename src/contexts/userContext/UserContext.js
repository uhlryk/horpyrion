import Context from "../Context";
import SchemaContext from "../schemaContext/SchemaContext";
import getUserContextFactory from "./contextActions/getUserContextFactory";
import createFactory from "../actions/createFactory";
import UserSchemaContext from "../userSchemaContext/UserSchemaContext";

export default class UserContext extends Context {
    constructor(userId, contextAction, modelManager) {
        super(contextAction.createContextAction("user", getUserContextFactory(userId)), modelManager);
    }

    createSchema(schemaName) {
        const createSchemaAction = createFactory("Schema", this.getModelManager());
        return this.resolveContextAction()
            .then(() => createSchemaAction({ name: schemaName }))
            .then(schema => schema.toJSON());
    }

    setSchema(schemaId) {
        return new SchemaContext(schemaId, this.getContextAction(), this.getModelManager());
    }

    setUserSchema() {
        return new UserSchemaContext(this.getContextAction(), this.getModelManager());
    }

    getData() {
        return this.resolveContextAction().then(({ user }) => user);
    }
}
