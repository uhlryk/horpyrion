import Context from "../../../Context";
import getRecordContextFactory from "./getRecordContextFactory";
import ModelManager from "../../../../ModelManager";

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
            .then(({ record }) => this.updateFactory(ModelManager.MODEL.RECORD)(record.id, { data: data }))
            .then(() => true);
    }

    removeRecord() {
        return this.resolveContextAction()
            .then(({ record }) => this.removeFactory(ModelManager.MODEL.RECORD)(record.id))
            .then(() => true);
    }
}
