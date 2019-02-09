export default function removeRecordFactory(modelId, modelManager) {
    return entityId =>
        modelManager
            .getModels()
            [modelId].destroy({
                where: {
                    id: entityId
                }
            })

            .then(() => true);
}
