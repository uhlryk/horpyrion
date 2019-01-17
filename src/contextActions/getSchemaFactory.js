export default function getContextSchemaFactory(schemaId, modelManager) {
    return () =>
        modelManager
            .getModels()
            .Schema.findOne({
                where: {
                    id: schemaId
                },
                raw: true
            })
            .then(schema => {
                if (!schema) {
                }
                return schema;
            });
}
