import createFactory from "./actions/createFactory";

export default class ContextAction {
    constructor(contextAction, modelManager) {
        this._contextAction = contextAction.copyContextAction();
        this._modelManager = modelManager;
    }

    addContextAction(key, executeFactory) {
        this._contextAction.addAction(key, executeFactory);
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

    createContext(id, Context) {
        return new Context(id, this.getContextAction(), this.getModelManager());
    }

    createFactory(modelId) {
        return createFactory(modelId, this.getModelManager());
    }
}
