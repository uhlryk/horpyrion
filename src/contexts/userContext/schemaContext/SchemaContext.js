import Context from "../../Context";
import getSchemaContextFactory from "./getSchemaContextFactory";
import RecordContext from "./recordContext/RecordContext";

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
            this.getFactory("Record")(recordId).then(record => {
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
            this.getListFactory("Record")(Object.assign({}, query, { SchemaId: schema.id }))
        );
    }

    createRecord(data) {
        return this.resolveContextAction()
            .then(({ schema }) => this.createFactory("Record")({ data: data, SchemaId: schema.id }))
            .then(record => record.toJSON());
    }

    updateRecord(recordId, data) {
        return this.resolveContextAction()
            .then(() => this.updateFactory("Record")(recordId, { data: data }))
            .then(() => true);
    }

    removeRecord(recordId) {
        return this.resolveContextAction()
            .then(() => this.removeFactory("Record")(recordId))
            .then(() => true);
    }

    async getAttributes() {
        return false;
    }
}