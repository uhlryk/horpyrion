import Promise from "bluebird";
import { MongoClient } from "mongodb";

export default class ModelManager {
    static MODEL = {
        USER: "User",
        SCHEMA: "Schema",
        RECORD: "Record",
        ATTRIBUTE: "Attribute"
    };

    constructor() {
        this._isSync = false;
        const url = "mongodb://localhost:27017";
        this._client = new MongoClient(url);
    }

    getDb() {
        return this._db;
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this._client.connect(err => {
                if (err) {
                    console.log("ERROR");
                    console.log(err);
                    return reject(err);
                }
                console.log("Connected successfully to server");
                this._isSync = true;
                this._db = this._client.db("myproject");

                return resolve();
            });
        });
    }

    disconnect() {
        this._client.close();
    }

    isSync() {
        return this._isSync;
    }
}
