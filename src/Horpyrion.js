import UserContext from "./contexts/userContext/UserContext";
import ContextAction from "./contexts/ContextAction";
import RootUser from "./RootUser";
import ModelManager from "./ModelManager";

export default class Horpyrion {
    constructor(configuration) {
        this._configuration = configuration;
    }
    async sync(options) {
        this._modelManager = new ModelManager(this._configuration);
        await this._modelManager.authenticate();
        await this._modelManager.sync(options);
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
