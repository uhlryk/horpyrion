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

    createRecord(name) {
        return this.resolveContextAction()
            .then(() => this.createFactory(ModelManager.MODEL.USER)({ name: name }))
            .then(user => user.toJSON());
    }

    getRecords(query) {
        return this.resolveContextAction()
            .then(() => this.getListFactory(ModelManager.MODEL.USER)(query))
            .then(userRecordList => userRecordList);
    }
}
