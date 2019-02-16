export default userId => modelManager => () => {
    return modelManager
        .getModels()
        .User.findOne({
            where: {
                id: userId
            },
            raw: true
        })
        .then(user => {
            if (!user) {
            }
            return user;
        });
};
