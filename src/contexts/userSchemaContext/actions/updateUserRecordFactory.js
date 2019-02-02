export default function updateUserRecordFactory(userName, modelManager) {
    return recordId =>
        modelManager
            .getModels()
            .User.update(
                {
                    name: userName
                },
                {
                    where: {
                        id: recordId
                    }
                }
            )

            .then(record => record);
}
