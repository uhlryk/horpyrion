export default function removeRecordFactory(modelManager) {
    return (recordId, schemaId) =>
        modelManager
            .getModels()
            .Record.destroy({
                where: {
                    id: recordId,
                    SchemaId: schemaId
                }
            })

            .then(() => true);
}
