export default function getRecordListFactory(query, modelManager) {
    return schemaId =>
        modelManager
            .getModels()
            .Record.findAll({
                where: {
                    SchemaId: schemaId
                },
                raw: true
            })
            .then(recordList => {
                return recordList;
            });
}
