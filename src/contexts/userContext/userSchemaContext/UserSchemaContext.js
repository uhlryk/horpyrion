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

    updateRecord(recordId, data) {
        return this.resolveContextAction()
            .then(() => this.updateFactory(ModelManager.MODEL.USER)(recordId, data))
            .then(() => true);
    }

    removeRecord(recordId) {
        return this.resolveContextAction()
            .then(() => this.removeFactory(ModelManager.MODEL.USER)(recordId))
            .then(() => true);
    }

    getRecord(userId) {
        return this.resolveContextAction()
            .then(() => this.getFactory(ModelManager.MODEL.USER)(userId))
            .then(userRecord => {
                if (userRecord) {
                    return userRecord;
                } else {
                    return null;
                }
            });
    }

    getRecords(query) {
        return this.resolveContextAction()
            .then(() => this.getListFactory(ModelManager.MODEL.USER)(query))
            .then(userRecordList => userRecordList);
    }
}
