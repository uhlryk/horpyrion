import Context from "../../Context";
import UserRecordContext from "./userRecordContext/UserRecordContext";
import ModelManager from "../../../ModelManager";

export default class UserSchemaContext extends Context {
    constructor(id, contextAction, modelManager) {
        super({
            name: "userSchema",
            contextAction,
            modelManager
        });
    }

    setUserRecord(userRecordId) {
        return new UserRecordContext(userRecordId, this._contextAction, this._modelManager);
    }

    insertRecord(name) {
        return this.resolveContextAction()
            .then(() => this.insertFactory(ModelManager.MODEL.USER)({ name: name }))
            .then(userId => userId);
    }

    getRecords(query) {
        return this.resolveContextAction()
            .then(() => this.getListFactory(ModelManager.MODEL.USER)(query))
            .then(userRecordList => userRecordList);
    }
}
