import UserAndSchemaContext from "./UserAndSchemaContext";
import RootUser from "./RootUser";
import ModelManager from "./ModelManager";
import getContextUserFactory from "./contextActions/getContextUserFactory";

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
        const contextUserAction = getContextUserFactory(RootUser.ROOT_USER_ID, this._modelManager);
        return new UserAndSchemaContext(contextUserAction, this._modelManager);
    }

    setUser(userId) {
        const contextUserAction = getContextUserFactory(userId, this._modelManager);
        return new UserAndSchemaContext(contextUserAction, this._modelManager);
    }

    getDbInstance() {
        return this._modelManager.getDbInstance();
    }
}
