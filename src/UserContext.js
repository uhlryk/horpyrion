import ResourceContext from "./ResourceContext";

export default class UserContext {
    static ROOT_USER_ID = Symbol("ROOT_USER_ID");
    constructor(userId, modelManager) {
        this._userId = userId;
        this._modelManager = modelManager;
    }

    async createResource(resourceName) {
        return ResourceContext.CreateResource(resourceName, this._userId, this._modelManager);
    }

    getResource(resourceName) {
        return new ResourceContext(resourceName, this._userId, this._modelManager);
    }
}
