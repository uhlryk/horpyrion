import UserContext from "./contexts/userContext/UserContext";
import ContextAction from "./contexts/ContextAction";
import RootUser from "./RootUser";
import ModelManager from "./ModelManager";

export default class Horpyrion {
    constructor(configuration) {
        this._configuration = configuration;
    }
    sync(options, onSyncCallback) {
        this._modelManager = new ModelManager(this._configuration);
        return this._modelManager
            .authenticate()
            .then(() => this._modelManager.sync(options))
            .then(() => {
                if (onSyncCallback) {
                    return onSyncCallback(this);
                }
            });
    }

    setRootUser() {
        const contextAction = new ContextAction(this._modelManager);
        return new UserContext(RootUser.ROOT_USER_ID, contextAction, this._modelManager);
    }

    setUser(userId) {
        const contextAction = new ContextAction(this._modelManager);
        return new UserContext(userId, contextAction, this._modelManager);
    }

    getDbInstance() {
        return this._modelManager.getDbInstance();
    }
}
