import Promise from "bluebird";
import { MongoClient } from "mongodb";

export default class ModelManager {
    static MODEL = {
        USER: "User",
        SCHEMA: "Schema",
        RECORD: "Record",
        ATTRIBUTE: "Attribute"
    };

    constructor(configuration) {
        this._isSync = false;
        this._configuration = configuration;
        this._client = new MongoClient(this._configuration.host);
    }

    getDb() {
        return this._db;
    }

    connect() {
        return new Promise((resolve, reject) => {
            this._client.connect(err => {
                if (err) {
                    console.log("ERROR");
                    console.log(err);
                    return reject(err);
                }
                console.log("Connected successfully to server");
                this._isSync = true;
                this._db = this._client.db(this._configuration.dbName);

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
