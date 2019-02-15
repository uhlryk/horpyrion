import updateFactory from "../actions/updateFactory";
import removeFactory from "../actions/removeFactory";
import getRecordContextFactory from "./contextActions/getRecordContextFactory";

export default class RecordContext {
    constructor(recordId, contextAction, modelManager) {
        this._contextAction = contextAction.createContextAction("record", getRecordContextFactory(recordId));
        this._modelManager = modelManager;
    }

    updateRecord(data) {
        const updateRecordAction = updateFactory("Record", this._modelManager);

        return this._contextAction
            .resolve()
            .then(({ record }) => updateRecordAction(record.id, { data: data }))
            .then(() => true);
    }

    removeRecord() {
        const removeRecordAction = removeFactory("Record", this._modelManager);

        return this._contextAction
            .resolve()
            .then(({ record }) => removeRecordAction(record.id))
            .then(() => true);
    }

    getData() {
        return this._contextAction.resolve().then(({ record }) => record);
    }
}
