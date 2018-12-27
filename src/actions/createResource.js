export default function createResource(resourceName, userId, modelManager) {
    return modelManager
        .getModels()
        .EntitySchema.create(
            {
                name: resourceName
            },
            {}
        )
        .then(entitySchema => entitySchema.id);
}
