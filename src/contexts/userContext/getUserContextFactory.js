import ModelManager from "../../ModelManager";

export default userId => modelManager => () => {
    return modelManager
        .getModels()
        [ModelManager.MODEL.USER].findOne({
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
