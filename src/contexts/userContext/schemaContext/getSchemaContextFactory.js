import ModelManager from "../../../ModelManager";

export default schemaId => modelManager => () => {
    return modelManager
        .getModels()
        [ModelManager.MODEL.SCHEMA].findOne({
            where: {
                id: schemaId
            },
            raw: true
        })
        .then(schema => {
            if (!schema) {
            }
            return schema;
        });
};
