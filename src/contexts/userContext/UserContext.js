import Context from "../Context";
import SchemaContext from "./schemaContext/SchemaContext";
import getUserContextFactory from "./getUserContextFactory";
import UserSchemaContext from "./userSchemaContext/UserSchemaContext";
import ModelManager from "../../ModelManager";

export default class UserContext extends Context {
    constructor(userId, contextAction, modelManager) {
        super({
            name: "user",
            contextActionFunction: getUserContextFactory(userId),
            contextAction,
            modelManager
        });
    }

    createSchema(schemaName) {
        return this.resolveContextAction()
            .then(() => this.createFactory(ModelManager.MODEL.SCHEMA)({ name: schemaName }))
            .then(schema => schema.toJSON());
    }

    setSchema(schemaId) {
        return this.createContext(schemaId, SchemaContext);
    }

    setUserSchema() {
        return this.createContext(null, UserSchemaContext);
    }
}
