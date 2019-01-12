export default function createResource(resourceName, userId, data, modelManager) {
    return modelManager
        .getModels()
        .EntitySchema.findOne({
            where: {
                name: resourceName
            },
            include: [
                {
                    model: modelManager.getModels().Attribute
                }
            ]
        })
        .then(entitySchema => {
            // TODO: test data with entitySchema
            // for now assume that it pass
            return modelManager.getModels().EntityRecord.create({
                EntitySchemaId: entitySchema.id,
                data: data
            });
        })
        .then(entityRecord => entityRecord.id);
}
