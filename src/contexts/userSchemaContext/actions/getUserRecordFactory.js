export default function getUserRecordListFactory(recordId, modelManager) {
    return () =>
        modelManager
            .getModels()
            .User.findOne({
                where: {
                    id: recordId
                },
                raw: true
            })
            .then(userRecord => {
                return userRecord;
            });
}
