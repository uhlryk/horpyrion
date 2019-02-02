export default function getUserRecordListFactory(query, modelManager) {
    return () =>
        modelManager
            .getModels()
            .User.findAll({
                where: {},
                raw: true
            })
            .then(userRecordList => {
                return userRecordList;
            });
}
