import createFactory from "../actions/createFactory";
import getFactory from "../actions/getFactory";
import getListFactory from "../actions/getListFactory";
import updateFactory from "../actions/updateFactory";
import removeFactory from "../actions/removeFactory";
import throwIfNoSync from "../../throwIfNoSync";
import getSchemaContextFactory from "./contextActions/getSchemaContextFactory";
import RecordContext from "../recordContext/RecordContext";

export default class SchemaContext {
    constructor(schemaId, userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._schemaContextAction = getSchemaContextFactory(schemaId, modelManager);
        this._modelManager = modelManager;
    }

    setRecord(recordId) {
        return new RecordContext(recordId, this._schemaContextAction, this._userContextAction, this._modelManager);
    }

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    getData() {
        return throwIfNoSync(this._modelManager).then(() => this._schemaContextAction());
    }

    getRecord(recordId) {
        const getRecordAction = getFactory("Record", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema =>
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

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => getRecordListAction(Object.assign({}, query, { SchemaId: schema.id })))
            .then(recordList => recordList);
    }

    createRecord(data) {
        const createRecordAction = createFactory("Record", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => createRecordAction({ data: data, SchemaId: schema.id }))
            .then(record => record.toJSON());
    }

    updateRecord(recordId, data) {
        const updateRecordAction = updateFactory("Record", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(() => updateRecordAction(recordId, { data: data }))
            .then(() => true);
    }

    removeRecord(recordId) {
        const removeRecordAction = removeFactory("Record", this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(() => removeRecordAction(recordId))
            .then(() => true);
    }

    async getAttributes() {
        return false;
    }
}
