import ModelManager from "../../../../ModelManager";

export default recordId => modelManager => ({ schema }) => {
    return modelManager
        .getModels()
        [ModelManager.MODEL.RECORD].findOne({
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
