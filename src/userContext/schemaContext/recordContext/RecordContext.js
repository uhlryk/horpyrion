import updateRecordFactory from "../../../actions/updateRecordFactory";
import throwIfNoSync from "../../../throwIfNoSync";
import getRecordContextFactory from "./getRecordContextFactory";

export default class RecordContext {
    constructor(recordId, schemaContextAction, userContextAction, modelManager) {
        this._userContextAction = userContextAction;
        this._schemaContextAction = schemaContextAction;
        this._recordContextAction = getRecordContextFactory(recordId, modelManager);
        this._modelManager = modelManager;
    }

    updateRecord(data) {
        const updateRecordAction = updateRecordFactory(data, this._modelManager);

        return throwIfNoSync(this._modelManager)
            .then(() => this._schemaContextAction())
            .then(schema =>
                this._recordContextAction(schema.id).then(record => updateRecordAction(record.id, schema.id))
            )
            .then(() => true);
    }
}
