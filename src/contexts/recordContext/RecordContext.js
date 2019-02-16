import Context from "../Context";
import getRecordContextFactory from "./contextActions/getRecordContextFactory";

export default class RecordContext extends Context {
    constructor(recordId, contextAction, modelManager) {
        super({
            name: "record",
            contextActionFunction: getRecordContextFactory(recordId),
            contextAction,
            modelManager
        });
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
}
