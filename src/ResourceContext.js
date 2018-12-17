export default class ResourceContext {
    constructor(resource, user, db) {
        this._resource = resource;
        this._user = user;
        this._db = db;
    }

    static async CreateResource(resourceName, user, db) {
        return false;
    }

    async addAttribute(attributeName, attributeType) {
        return false;
    }

    async getRecord(recordId) {
        return false;
    }

    async getRecords() {
        return false;
    }

    async createRecord() {
        return false;
    }

    async updateRecord() {
        return false;
    }

    async getAttributes() {
        return false;
    }
}
