export default function createFactory(modelId, modelManager) {
    return (data = {}) =>
        modelManager
            .getModels()
            [modelId].create(data, {})
            .then(entity => {
                return entity;
            });
}
