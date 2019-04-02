import Promise from "bluebird";
import uuid from "uuid";
export default function insertFactory(collectionName, modelManager) {
    return (data = {}) =>
        new Promise((resolve, reject) => {
            let id;
            if (data.id) {
                id = data.id;
            } else {
                id = uuid.v4();
            }
            modelManager
                .getDb()
                .collection(collectionName)
                .insertOne(Object.assign({}, data, { id: id }), (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(id);
                });
        });
}
