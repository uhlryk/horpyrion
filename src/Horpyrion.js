import UserContext from "./UserContext";
import ModelManager from "./ModelManager";

export default class Horpyrion {
    constructor(configuration) {
        this._configuration = configuration;
    }
    async sync() {
        this._modelManager = new ModelManager(this._configuration);
        return this._modelManager.authenticate();
    }

    async authorize() {
        return UserContext.Authorize();
    }

    getRootUser() {
        return new UserContext(UserContext.ROOT_USER_ID, this._modelManager);
    }

    getUser(userId) {
        return new UserContext(userId, this._modelManager);
    }
}
