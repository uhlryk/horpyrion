export default function updateFactory(modelId, modelManager) {
    return (entityId, data = {}) =>
        modelManager
            .getModels()
            [modelId].update(data, {
                where: {
                    id: entityId
                }
            })

            .then(entity => entity);
}
