export default function getListFactory(modelId, whereData = {}, modelManager) {
    return (params = {}) =>
        modelManager
            .getModels()
            [modelId].findAll({
                where: Object.assign({}, whereData, params),
                raw: true
            })
            .then(entity => {
                return entity;
            });
}
