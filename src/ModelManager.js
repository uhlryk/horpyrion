import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import Overload from "function-overloader";

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



        // Overload.when(Overload.INSTANCE(Sequelize))
        //     .do(sequelize => {
        //         this._client = sequelize;
        //     })
        //     .else(config => {
        //         this._client = new Sequelize(config.dbname, config.user, config.password, {
        //             dialect: config.type,
        //             port: config.port,
        //             host: config.host,
        //             logging: config.logging
        //         });
        //     })
        //     .execute(...arguments);
        // this._models = {};
        // fs.readdirSync(path.join(__dirname, "models"))
        //     .filter(file => {
        //         return file.indexOf(".") !== 0;
        //     })
        //     .forEach(file => {
        //         const model = this._client.import(path.join(__dirname, "models", file));
        //         this._models[model.name] = model;
        //     });
        // Object.values(this._models).forEach(model => {
        //     if (model.associate) {
        //         model.associate(this._models);
        //     }
        // });
    }

    getDb() {
        return this._db;
    }

    async connect(options) {
        return new Promise((resolve, reject) => {
            this._client.connect(err => {
                if(err) {
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
        // return this._client.sync(options).then(() => {
        //     this._isSync = true;
        // });
    }

    disconnect() {
        this._client.close();
    }

    isSync() {
        return this._isSync;
    }

    // getModels() {
    //     return this._models;
    // }

}
