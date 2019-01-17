import UserContext from "./userContext/UserContext";
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
        return new UserContext(RootUser.ROOT_USER_ID, this._modelManager);
    }

    setUser(userId) {
        return new UserContext(userId, this._modelManager);
    }

    getDbInstance() {
        return this._modelManager.getDbInstance();
    }
}
