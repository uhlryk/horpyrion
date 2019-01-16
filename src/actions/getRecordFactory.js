export default function getRecordListFactory(recordId, modelManager) {
    return schema =>
        modelManager
            .getModels()
            .Record.findOne({
                where: {
                    SchemaId: schema.id,
                    id: recordId
                },
                raw: true
            })
            .then(record => {
                return record;
            });
}
