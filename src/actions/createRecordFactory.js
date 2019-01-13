export default function createRecordFactory(data, modelManager) {
    return schema =>
        modelManager
            .getModels()
            .Record.create({
                SchemaId: schema.id,
                data: data
            })

            .then(record => record);
}
