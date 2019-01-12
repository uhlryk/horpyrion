import createResource from "./actions/createResource";
import createRecord from "./actions/createRecord";
import throwIfNoSync from "./throwIfNoSync";

export default class ResourceContext {
    constructor(resourceName, userId, modelManager) {
        this._resourceName = resourceName;
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

    async createRecord(data) {
        return throwIfNoSync(this._modelManager).then(() =>
            createRecord(this._resourceName, this._userId, data, this._modelManager)
        );
    }

    async updateRecord() {
        return false;
    }

    async getAttributes() {
        return false;
    }
}
