import ResourceContext from "./ResourceContext";

export default class UserContext {
    static ROOT_USER_TOKEN = Symbol("ROOT_USER_TOKEN");
    constructor(user, db) {
        this._user = user;
        this._db = db;
    }

    static async Authorize() {
        return false;
    }

    async createResource(resourceName) {
        return ResourceContext.CreateResource(resourceName, this._user, this._db);
    }

    getResource(resourceName) {
        return new ResourceContext(resourceName, this._user, this._db);
    }
}
