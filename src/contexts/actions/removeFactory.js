export default function removeFactory(collectionName, modelManager) {
    return entityId =>
        new Promise((resolve, reject) => {
            modelManager
                .getDb()
                .collection(collectionName)
                .deleteOne({ id: entityId }, err => {
                    if(err) {
                        return reject(err);
                    }
                    return resolve(true);
                });
        });
}
