export default function createFactory(modelId, data = {}, modelManager) {
    return (params = {}) =>
        modelManager
            .getModels()
            [modelId].create(Object.assign({}, data, params), {})
            .then(entity => {
                return entity;
            });
}
