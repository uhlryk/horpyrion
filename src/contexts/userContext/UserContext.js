import Context from "../Context";
import SchemaContext from "../schemaContext/SchemaContext";
import getUserContextFactory from "./contextActions/getUserContextFactory";
import UserSchemaContext from "../userSchemaContext/UserSchemaContext";

export default class UserContext extends Context {
    constructor(userId, contextAction, modelManager) {
        super(contextAction, modelManager);
        this.addContextAction("user", getUserContextFactory(userId));
    }

    createSchema(schemaName) {
        return this.resolveContextAction()
            .then(() => this.createFactory("Schema")({ name: schemaName }))
            .then(schema => schema.toJSON());
    }

    setSchema(schemaId) {
        return this.createContext(schemaId, SchemaContext);
    }

    setUserSchema() {
        return this.createContext(null, UserSchemaContext);
    }

    getData() {
        return this.resolveContextAction().then(({ user }) => user);
    }
}
