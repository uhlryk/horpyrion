import Context from "../../../Context";
import getUserRecordContextFactory from "./getUserRecordContextFactory";

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
            .then(({ userRecord }) => this.updateFactory("User")(userRecord.id, data))
            .then(() => true);
    }

    removeRecord() {
        return this.resolveContextAction()
            .then(({ userRecord }) => this.removeFactory("User")(userRecord.id))
            .then(() => true);
    }
}
