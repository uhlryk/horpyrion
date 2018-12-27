import createResource from "./actions/createResource";

export default class ResourceContext {
    constructor(resource, userId, modelManager) {
        this._resource = resource;
        this._userId = userId;
        this._modelManager = modelManager;
    }

    static async CreateResource(resourceName, userId, modelManager) {
        return createResource(resourceName, userId, modelManager);
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
