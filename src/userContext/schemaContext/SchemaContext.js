import createRecordFactory from "../../actions/createRecordFactory";
import getRecordListFactory from "../../actions/getRecordListFactory";
import getRecordFactory from "../../actions/getRecordFactory";
import throwIfNoSync from "../../throwIfNoSync";
import getSchemaFactory from "../../contextActions/getSchemaFactory";

export default class SchemaContext {
    constructor(schemaName, userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._schemaContextAction = getSchemaFactory(schemaName, modelManager);
        this._modelManager = modelManager;
    }

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    async getRecord(recordId) {
        const getRecordAction = getRecordFactory(recordId, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => getRecordAction(schema))
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
            .then(schema => getRecordListAction(schema))
            .then(recordList => recordList);
    }

    createRecord(data) {
        const createRecordAction = createRecordFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema => createRecordAction(schema))
            .then(record => record.toJSON());
    }

    async updateRecord() {
        return false;
    }

    async getAttributes() {
        return false;
    }
}
