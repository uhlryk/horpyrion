import getFactory from "./actions/getFactory";
import throwIfNoSync from "../throwIfNoSync";

export default class ContextAction {
    constructor(modelManager, contextActions = []) {
        this._contextActions = contextActions;
        this._modelManager = modelManager;
    }

    createContextAction(name, entityId, modelId) {
        return new ContextAction(
            this._modelManager,
            this._contextActions.concat([{ name, entityId, execute: getFactory(modelId, this._modelManager) }])
        );
    }

    resolve() {
        return this._contextActions.reduce((prevContextAction, contextAction) => {
            return prevContextAction.then(contextObject =>
                contextAction.execute(contextObject).then(context => {
                    return Object.assign({}, contextObject, { [contextAction.name]: context });
                })
            );
        }, throwIfNoSync(this._modelManager).then(() => {}));
    }
}
