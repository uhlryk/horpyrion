export default function getListFactory(modelId, modelManager) {
    return (whereData = {}) =>
        modelManager
            .getModels()
            [modelId].findAll({
                where: whereData,
                raw: true
            })
            .then(entity => {
                return entity;
            });
}
