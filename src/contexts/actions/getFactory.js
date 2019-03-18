export default function getFactory(collectionName, modelManager) {
    return entityId =>
        new Promise((resolve, reject) => {
            modelManager
                .getDb()
                .collection(collectionName)
                .findOne({ id: entityId }, (err, docs) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(docs);
                })
        });
}
