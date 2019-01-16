import createRecordFactory from "./actions/createRecordFactory";
import getRecordListFactory from "./actions/getRecordListFactory";
import getRecordFactory from "./actions/getRecordFactory";
import throwIfNoSync from "./throwIfNoSync";

export default class RecordContext {
    constructor(contextUserAction, contextSchemaAction, modelManager) {
        this._userAction = contextUserAction;
        this._schemaAction = contextSchemaAction;
        this._modelManager = modelManager;
    }

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    async getRecord(recordId) {
        const recordAction = getRecordFactory(recordId, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaAction())
            .then(schema => recordAction(schema))
            .then(record => {
                if (record) {
                    return record;
                } else {
                    return null;
                }
            });
    }

    getRecords(query) {
        const recordAction = getRecordListFactory(query, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaAction())
            .then(schema => recordAction(schema))
            .then(recordList => recordList);
    }

    createRecord(data) {
        const recordAction = createRecordFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaAction())
            .then(schema => recordAction(schema))
            .then(record => record.toJSON());
    }

    async updateRecord() {
        return false;
    }

    async getAttributes() {
        return false;
    }
}
