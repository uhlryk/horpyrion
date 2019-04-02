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

    insertSchema(schemaName) {
        return this.resolveContextAction().then(() =>
            this.insertFactory(ModelManager.MODEL.SCHEMA)({ name: schemaName })
        );
    }

    getSchemas(query) {
        return this.resolveContextAction().then(() =>
            this.getListFactory(ModelManager.MODEL.SCHEMA)(Object.assign({}, query))
        );
    }

    setSchema(schemaId) {
        return this.createContext(schemaId, SchemaContext);
    }

    setUserSchema() {
        return this.createContext(null, UserSchemaContext);
    }
}
