export default function getContextUserFactory(userId, modelManager) {
    return () =>
        modelManager
            .getModels()
            .User.findOne({
                where: {
                    UserId: userId
                },
                raw: true
            })
            .then(user => {
                if (!user) {
                }
                return user;
            });
}
