import ModelManager from "../../../../ModelManager";

export default userRecordId => modelManager => () => {
    return modelManager
        .getModels()
        [ModelManager.MODEL.USER].findOne({
            where: {
                id: userRecordId
            },
            raw: true
        })
        .then(record => {
            if (!record) {
            }
            return record;
        });
};
