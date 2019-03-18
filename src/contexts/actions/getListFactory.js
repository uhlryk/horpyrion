export default function getListFactory(collectionName, modelManager) {
    return (whereData = {}) =>
        new Promise((resolve, reject) => {
            modelManager
                .getDb()
                .collection(collectionName)
                .find(whereData)
                .toArray((err, docs) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(docs);
                });
        });
}
