export default function getFactory(modelId, modelManager) {
    return entityId =>
        modelManager
            .getModels()
            [modelId].findOne({
                where: {
                    id: entityId
                },
                raw: true
            })
            .then(entity => {
                return entity;
            });
}
