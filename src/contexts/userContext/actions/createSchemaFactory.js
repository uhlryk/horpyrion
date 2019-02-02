export default function createSchemaFactory(schemaName, modelManager) {
    return () =>
        modelManager
            .getModels()
            .Schema.create(
                {
                    name: schemaName
                },
                {}
            )
            .then(entitySchema => {
                return entitySchema;
            });
}
