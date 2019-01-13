export default function getSchemaFactory(schemaName, modelManager) {
    return () =>
        modelManager
            .getModels()
            .Schema.findOne({
                where: {
                    name: schemaName
                }
            })
            .then(schema => {
                if (!schema) {
                }
                return schema;
            });
}
