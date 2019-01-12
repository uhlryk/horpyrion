import createResource from "./actions/createResource";
import throwIfNoSync from "./throwIfNoSync";

export default class ResourceContext {
    constructor(resource, userId, modelManager) {
        this._resource = resource;
        this._userId = userId;
        this._modelManager = modelManager;
    }

    static async CreateResource(resourceName, userId, modelManager) {
        return throwIfNoSync(modelManager).then(() => createResource(resourceName, userId, modelManager));
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
