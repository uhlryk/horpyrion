export default function getRecordListFactory(query, modelManager) {
    return schema =>
        modelManager
            .getModels()
            .Record.findAll({
                where: {
                    SchemaId: schema.id
                },
                raw: true
            })
            .then(recordList => {
                return recordList;
            });
}
