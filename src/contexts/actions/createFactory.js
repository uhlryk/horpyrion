import uuid from "uuid";
export default function createFactory(collectionName, modelManager) {
    return (data = {}) =>
        new Promise((resolve, reject) => {
            const id = uuid.v4();
            modelManager
                .getDb()
                .collection(collectionName)
                .insertOne(Object.assign({}, data, {id: id}), (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(id);
                })
        });
}
