export default function getContextRecordFactory(recordId, modelManager) {
    return schemaId =>
        modelManager
            .getModels()
            .Record.findOne({
                where: {
                    SchemaId: schemaId,
                    id: recordId
                },
                raw: true
            })
            .then(record => {
                if (!record) {
                }
                return record;
            });
}
