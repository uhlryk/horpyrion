export default function updateRecordFactory(data, modelManager) {
    return (recordId, schemaId) =>
        modelManager
            .getModels()
            .Record.update(
                { data: data },
                {
                    where: {
                        id: recordId,
                        SchemaId: schemaId
                    }
                }
            )

            .then(record => record);
}
