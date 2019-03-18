import UserContext from "./contexts/userContext/UserContext";
import ContextAction from "./contexts/ContextAction";
import RootUser from "./RootUser";
import ModelManager from "./ModelManager";

export default class Horpyrion {
    constructor(configuration) {
        this._configuration = configuration;
    }
    connect(options, onSyncCallback) {
        this._modelManager = new ModelManager(this._configuration);
        return this._modelManager.connect(options)
            .then(() => {
                if (onSyncCallback) {
                    return onSyncCallback(this);
                }
            });
    }

    disconnect() {
        return this._modelManager.disconnect();
    }

    setRootUser() {
        const contextAction = new ContextAction(this._modelManager);
        return new UserContext(RootUser.ROOT_USER_ID, contextAction, this._modelManager);
    }

    setUser(userId) {
        const contextAction = new ContextAction(this._modelManager);
        return new UserContext(userId, contextAction, this._modelManager);
    }

    getDb() {
        return this._modelManager.getDb();
    }
}
