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

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    getRecord(recordId) {
        return this.resolveContextAction().then(({ schema }) =>
            this.getFactory(ModelManager.MODEL.RECORD)(recordId).then(record => {
                if (record && record.SchemaId === schema.id) {
                    return record;
                } else {
                    return null;
                }
            })
        );
    }

    getRecords(query) {
        return this.resolveContextAction().then(({ schema }) =>
            this.getListFactory(ModelManager.MODEL.RECORD)(Object.assign({}, query, { SchemaId: schema.id }))
        );
    }

    createRecord(data) {
        return this.resolveContextAction()
            .then(({ schema }) => this.createFactory(ModelManager.MODEL.RECORD)({ data: data, SchemaId: schema.id }))
            .then(record => record.toJSON());
    }

    updateRecord(recordId, data) {
        return this.resolveContextAction()
            .then(() => this.updateFactory(ModelManager.MODEL.RECORD)(recordId, { data: data }))
            .then(() => true);
    }

    removeRecord(recordId) {
        return this.resolveContextAction()
            .then(() => this.removeFactory(ModelManager.MODEL.RECORD)(recordId))
            .then(() => true);
    }

    async getAttributes() {
        return false;
    }
}
