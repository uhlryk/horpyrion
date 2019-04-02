import Promise from "bluebird";
import UserContext from "./contexts/userContext/UserContext";
import ContextAction from "./contexts/ContextAction";
import RootUser from "./RootUser";
import ModelManager from "./ModelManager";
import InitDataManager from "./InitDataManager";

export default class Horpyrion {
    constructor(configuration) {
        this._configuration = configuration;
    }
    connect(options) {
        this._modelManager = new ModelManager(this._configuration);
        const initDataManager = new InitDataManager(this);
        return this._modelManager.connect(options).then(() => {
            return Promise.all([initDataManager.createSchemaIfNotExist("SYSTEM_USER")]);
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
