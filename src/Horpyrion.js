import UserContext from "./UserContext";
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

    getRootUser() {
        return new UserContext(UserContext.ROOT_USER_ID, this._modelManager);
    }

    getUser(userId) {
        return new UserContext(userId, this._modelManager);
    }
}
