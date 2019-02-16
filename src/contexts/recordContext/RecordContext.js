import Context from "../Context";
import getRecordContextFactory from "./contextActions/getRecordContextFactory";

export default class RecordContext extends Context {
    constructor(recordId, contextAction, modelManager) {
        super(contextAction, modelManager);
        this.addContextAction("record", getRecordContextFactory(recordId));
    }

    updateRecord(data) {
        return this.resolveContextAction()
            .then(({ record }) => this.updateFactory("Record")(record.id, { data: data }))
            .then(() => true);
    }

    removeRecord() {
        return this.resolveContextAction()
            .then(({ record }) => this.removeFactory("Record")(record.id))
            .then(() => true);
    }

    getData() {
        return this.resolveContextAction().then(({ record }) => record);
    }
}
