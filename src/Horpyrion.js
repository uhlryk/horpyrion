import { MongoClient } from "mongodb";

export default class Horpyrion {
    async connect() {
        this._db = await new Promise((resolve, reject) => {
            MongoClient.connect(
                "mongodb://localhost:27017/storeTest",
                (err, db) => {
                    if (err) {
                        return reject(err);
                    }
                    console.log("Connected correctly to database server");
                    return resolve(db);
                }
            );
        });
        return true;
    }

    async disconnect() {
        return this._db.close();
    }
}
