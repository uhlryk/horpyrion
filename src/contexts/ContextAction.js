import throwIfNoSync from "../throwIfNoSync";

export default class ContextAction {
    constructor(modelManager, contextActions = []) {
        this._contextActions = contextActions;
        this._modelManager = modelManager;
    }

    copyContextAction() {
        return new ContextAction(this._modelManager, this._contextActions.slice());
    }

    addAction(key, executeFactory) {
        this._contextActions.push({ key, execute: executeFactory(this._modelManager) });
    }

    createContextAction(key, executeFactory) {
        return new ContextAction(
            this._modelManager,
            this._contextActions.concat([{ key, execute: executeFactory(this._modelManager) }])
        );
    }

    resolve() {
        return this._contextActions.reduce((prevContextAction, contextAction) => {
            return prevContextAction.then(contextObject =>
                contextAction.execute(contextObject).then(context => {
                    return Object.assign({}, contextObject, { [contextAction.key]: context });
                })
            );
        }, throwIfNoSync(this._modelManager).then(() => {}));
    }
}
