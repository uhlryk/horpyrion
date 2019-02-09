export default function getFactory(modelId, elementId, modelManager) {
    return () =>
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
