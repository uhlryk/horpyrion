import createFactory from "../actions/createFactory";
import getFactory from "../actions/getFactory";
import getListFactory from "../actions/getListFactory";
import updateFactory from "../actions/updateFactory";
import removeFactory from "../actions/removeFactory";
import getSchemaContextFactory from "./contextActions/getSchemaContextFactory";
import RecordContext from "../recordContext/RecordContext";

export default class SchemaContext {
    constructor(schemaId, contextAction, modelManager) {
        this._contextAction = contextAction.createContextAction("schema", getSchemaContextFactory(schemaId));
        this._modelManager = modelManager;
    }

    setRecord(recordId) {
        return new RecordContext(recordId, this._contextAction, this._modelManager);
    }

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    getData() {
        return this._contextAction.resolve().then(({ schema }) => schema);
    }

    getRecord(recordId) {
        const getRecordAction = getFactory("Record", this._modelManager);

        return this._contextAction.resolve().then(({ schema }) =>
            getRecordAction(recordId).then(record => {
                if (record && record.SchemaId === schema.id) {
                    return record;
                } else {
                    return null;
                }
            })
        );
    }

    getRecords(query) {
        const getRecordListAction = getListFactory("Record", this._modelManager);

        return this._contextAction
            .resolve()
            .then(({ schema }) => getRecordListAction(Object.assign({}, query, { SchemaId: schema.id })));
    }

    createRecord(data) {
        const createRecordAction = createFactory("Record", this._modelManager);

        return this._contextAction
            .resolve()
            .then(({ schema }) => createRecordAction({ data: data, SchemaId: schema.id }))
            .then(record => record.toJSON());
    }

    updateRecord(recordId, data) {
        const updateRecordAction = updateFactory("Record", this._modelManager);

        return this._contextAction
            .resolve()
            .then(() => updateRecordAction(recordId, { data: data }))
            .then(() => true);
    }

    removeRecord(recordId) {
        const removeRecordAction = removeFactory("Record", this._modelManager);

        return this._contextAction
            .resolve()
            .then(() => removeRecordAction(recordId))
            .then(() => true);
    }

    async getAttributes() {
        return false;
    }
}
