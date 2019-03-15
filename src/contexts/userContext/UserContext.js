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

    // getSchema(schemaId) {
    //     return this.resolveContextAction().then(() =>
    //         this.getFactory(ModelManager.MODEL.SCHEMA)(schemaId).then(schema => {
    //             if (schema) {
    //                 return schema;
    //             } else {
    //                 return null;
    //             }
    //         })
    //     );
    // }

    getSchemas(query) {
        return this.resolveContextAction().then(() =>
            this.getListFactory(ModelManager.MODEL.SCHEMA)(Object.assign({}, query))
        );
    }

    // updateSchema(schemaId, schemaName) {
    //     return this.resolveContextAction()
    //         .then(() => this.updateFactory(ModelManager.MODEL.SCHEMA)(schemaId, { name: schemaName }))
    //         .then(() => true);
    // }
    //
    // removeSchema(schemaId) {
    //     return this.resolveContextAction()
    //         .then(() => this.removeFactory(ModelManager.MODEL.SCHEMA)(schemaId))
    //         .then(() => true);
    // }

    setSchema(schemaId) {
        return this.createContext(schemaId, SchemaContext);
    }

    setUserSchema() {
        return this.createContext(null, UserSchemaContext);
    }
}
