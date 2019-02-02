export default function getRecordListFactory(recordId, modelManager) {
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
                return record;
            });
}
