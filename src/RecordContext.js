import createRecordFactory from "./actions/createRecordFactory";
import throwIfNoSync from "./throwIfNoSync";

export default class RecordContext {
    constructor(userAction, schemaAction, modelManager) {
        this._userAction = userAction;
        this._schemaAction = schemaAction;
        this._modelManager = modelManager;
    }

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    async getRecord(recordId) {
        return false;
    }

    async getRecords() {
        return false;
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
