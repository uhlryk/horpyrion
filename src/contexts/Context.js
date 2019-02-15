export default class ContextAction {
    constructor(contextAction, modelManager) {
        this._contextAction = contextAction;
        this._modelManager = modelManager;
    }

    getContextAction() {
        return this._contextAction;
    }

    resolveContextAction() {
        return this._contextAction.resolve();
    }

    getModelManager() {
        return this._modelManager;
    }
}
