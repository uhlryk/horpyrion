import { MongoClient } from "mongodb";

export default class Horpyrion {
    constructor(mongoUrl) {
        this._mongoUrl = mongoUrl;
    }
    async sync() {
        return new Promise((resolve, reject) => {
            MongoClient.connect(
                this._mongoUrl,
                (err, db) => {
                    if (err) {
                        return reject(err);
                    }
                    console.log("Connected correctly to database server");
                    this._db = db;
                    return resolve(db);
                }
            );
        });
    }
}
