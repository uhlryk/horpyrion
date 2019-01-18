export default function createRecordFactory(data, modelManager) {
    return schemaId =>
        modelManager
            .getModels()
            .Record.create({
                SchemaId: schemaId,
                data: data
            })

            .then(record => record);
}
