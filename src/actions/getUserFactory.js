export default function getUserFactory(userId, modelManager) {
    return () =>
        modelManager
            .getModels()
            .User.findOne({
                where: {
                    UserId: userId
                }
            })
            .then(user => {
                if (!user) {
                }
                return user;
            });
}
