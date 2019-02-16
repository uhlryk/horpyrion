import createFactory from "./actions/createFactory";
import updateFactory from "./actions/updateFactory";
import getFactory from "./actions/getFactory";
import getListFactory from "./actions/getListFactory";
import removeFactory from "./actions/removeFactory";

export default class ContextAction {
    constructor({ name, contextActionFunction, contextAction, modelManager }) {
        this._contextAction = contextAction.copyContextAction();
        this._modelManager = modelManager;
        this._name = name;
        if (contextActionFunction) {
            this.addContextActionFunction(this._name, contextActionFunction);
        }
    }

    getName() {
        return this._name;
    }

    addContextActionFunction(key, executeFactory) {
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

    updateFactory(modelId) {
        return updateFactory(modelId, this.getModelManager());
    }

    getFactory(modelId) {
        return getFactory(modelId, this.getModelManager());
    }

    getListFactory(modelId) {
        return getListFactory(modelId, this.getModelManager());
    }

    removeFactory(modelId) {
        return removeFactory(modelId, this.getModelManager());
    }

    getData() {
        return this.resolveContextAction().then(context => context[this.getName()]);
    }
}
