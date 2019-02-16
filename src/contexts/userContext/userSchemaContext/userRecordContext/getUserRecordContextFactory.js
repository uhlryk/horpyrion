export default userRecordId => modelManager => () => {
    return modelManager
        .getModels()
        .User.findOne({
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
