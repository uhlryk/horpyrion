import createFactory from "../actions/createFactory";
import getFactory from "../actions/getFactory";
import getListFactory from "../actions/getListFactory";
import updateRecordFactory from "./actions/updateRecordFactory";
import removeRecordFactory from "./actions/removeRecordFactory";
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
        const getRecordAction = getFactory("Record", recordId, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema =>
                getRecordAction().then(record => {
                    if (record && record.SchemaId === schema.id) {
                        return record;
                    } else {
                        return null;
                    }
                })
            );
    }

    getRecords(query) {
        const getRecordListAction = getListFactory("Record", query, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => getRecordListAction({ SchemaId: schema.id }))
            .then(recordList => recordList);
    }

    createRecord(data) {
        const createRecordAction = createFactory("Record", { data: data }, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => createRecordAction({ SchemaId: schema.id }))
            .then(record => record.toJSON());
    }

    updateRecord(recordId, data) {
        const updateRecordAction = updateRecordFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => updateRecordAction(recordId, schema.id))
            .then(() => true);
    }

    removeRecord(recordId) {
        const removeRecordAction = removeRecordFactory(this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => removeRecordAction(recordId, schema.id))
            .then(() => true);
    }

    async getAttributes() {
        return false;
    }
}
