export default function getFactory(modelId, modelManager) {
    return elementId =>
        modelManager
            .getModels()
            [modelId].findOne({
                where: {
                    id: elementId
                },
                raw: true
            })
            .then(record => {
                return record;
            });
}
