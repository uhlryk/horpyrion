import Context from "../../../Context";
import getUserRecordContextFactory from "./getUserRecordContextFactory";
import ModelManager from "../../../../ModelManager";

export default class UserRecordContext extends Context {
    constructor(userRecordId, contextAction, modelManager) {
        super({
            name: "userRecord",
            contextActionFunction: getUserRecordContextFactory(userRecordId),
            contextAction,
            modelManager
        });
    }

    updateRecord(data) {
        return this.resolveContextAction()
            .then(({ userRecord }) => this.updateFactory(ModelManager.MODEL.USER)(userRecord.id, data))
            .then(() => true);
    }

    removeRecord() {
        return this.resolveContextAction()
            .then(({ userRecord }) => this.removeFactory(ModelManager.MODEL.USER)(userRecord.id))
            .then(() => true);
    }
}
