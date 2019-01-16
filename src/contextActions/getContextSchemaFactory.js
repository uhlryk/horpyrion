export default function getContextSchemaFactory(schemaName, modelManager) {
    return () =>
        modelManager
            .getModels()
            .Schema.findOne({
                where: {
                    name: schemaName
                },
                raw: true
            })
            .then(schema => {
                if (!schema) {
                }
                return schema;
            });
}
