import Context from "../../Context";
import getSchemaContextFactory from "./getSchemaContextFactory";
import RecordContext from "./recordContext/RecordContext";
import ModelManager from "../../../ModelManager";

export default class SchemaContext extends Context {
    constructor(schemaId, contextAction, modelManager) {
        super({
            name: "schema",
            contextActionFunction: getSchemaContextFactory(schemaId),
            contextAction,
            modelManager
        });
    }

    setRecord(recordId) {
        return new RecordContext(recordId, this._contextAction, this._modelManager);
    }

    getRecord(recordId) {
        return this.resolveContextAction().then(() => this.getFactory(ModelManager.MODEL.RECORD)(recordId));
    }

    updateSchema(schemaName) {
        return this.resolveContextAction()
            .then(({ schema }) => this.updateFactory(ModelManager.MODEL.SCHEMA)(schema.id, { name: schemaName }))
            .then(() => true);
    }

    removeSchema() {
        return this.resolveContextAction()
            .then(({ schema }) => this.removeFactory(ModelManager.MODEL.SCHEMA)(schema.id))
            .then(() => true);
    }

    getRecords(query) {
        return this.resolveContextAction().then(({ schema }) =>
            this.getListFactory(ModelManager.MODEL.RECORD)(Object.assign({}, query, { SchemaId: schema.id }))
        );
    }

    insertRecord(data) {
        return this.resolveContextAction()
            .then(({ schema }) => this.insertFactory(ModelManager.MODEL.RECORD)({ data: data, SchemaId: schema.id }))
            .then(recordId => recordId);
    }
}
