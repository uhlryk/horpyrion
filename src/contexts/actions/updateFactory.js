import Promise from "bluebird";
export default function updateFactory(collectionName, modelManager) {
    return (entityId, data = {}) =>
        new Promise((resolve, reject) => {
            modelManager
                .getDb()
                .collection(collectionName)
                .updateOne({ id: entityId }, { $set: data }, (err, docs) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(true);
                });
        });
}
