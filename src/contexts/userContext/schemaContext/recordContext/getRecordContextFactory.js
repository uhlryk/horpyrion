export default recordId => modelManager => ({ schema }) => {
    return modelManager
        .getModels()
        .Record.findOne({
            where: {
                SchemaId: schema.id,
                id: recordId
            },
            raw: true
        })
        .then(record => {
            if (!record) {
            }
            return record;
        });
};
