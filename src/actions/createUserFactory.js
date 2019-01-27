export default function createUserFactory(userName, modelManager) {
    return () =>
        modelManager
            .getModels()
            .User.create(
                {
                    name: userName
                },
                {}
            )
            .then(user => {
                return user;
            });
}
