import { MongoClient } from "mongodb";

export default class Horpyrion {
    async start(mongoUrl) {
        this._db = await new Promise((resolve, reject) => {
            MongoClient.connect(
                mongoUrl,
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

    async stop() {
        return this._db.close();
    }
}
