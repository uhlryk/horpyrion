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
        return new UserContext(UserContext.ROOT_USER_TOKEN, this._modelManager);
    }

    getUser(userToken) {
        return new UserContext(userToken, this._modelManager);
    }
}
