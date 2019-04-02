import Context from "../Context";
import SchemaContext from "./schemaContext/SchemaContext";
import getUserContextFactory from "./getUserContextFactory";
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

    insertSchema(schemaId) {
        return this.resolveContextAction().then(() => this.insertFactory(ModelManager.MODEL.SCHEMA)({ id: schemaId }));
    }

    getSchema(schemaId) {
        return this.resolveContextAction().then(() => this.getFactory(ModelManager.MODEL.SCHEMA)(schemaId));
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
        return this.setSchema("SYSTEM_USER");
    }
}
