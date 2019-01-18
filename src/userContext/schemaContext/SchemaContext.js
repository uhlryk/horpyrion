import createRecordFactory from "../../actions/createRecordFactory";
import getRecordListFactory from "../../actions/getRecordListFactory";
import getRecordFactory from "../../actions/getRecordFactory";
import updateRecordFactory from "../../actions/updateRecordFactory";
import removeRecordFactory from "../../actions/removeRecordFactory";
import throwIfNoSync from "../../throwIfNoSync";
import getSchemaContextFactory from "./getSchemaContextFactory";
import RecordContext from "./recordContext/RecordContext";

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

    getRecord(recordId) {
        const getRecordAction = getRecordFactory(recordId, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => getRecordAction(schema.id))
            .then(record => {
                if (record) {
                    return record;
                } else {
                    return null;
                }
            });
    }

    getRecords(query) {
        const getRecordListAction = getRecordListFactory(query, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => getRecordListAction(schema.id))
            .then(recordList => recordList);
    }

    createRecord(data) {
        const createRecordAction = createRecordFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => createRecordAction(schema.id))
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
