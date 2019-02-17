import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import Overload from "function-overloader";

export default class ModelManager {
    static MODEL = {
        USER: "User",
        SCHEMA: "Schema",
        RECORD: "Record",
        ATTRIBUTE: "Attribute"
    };

    constructor() {
        this._isSync = false;
        Overload.when(Overload.INSTANCE(Sequelize))
            .do(sequelize => {
                this._sequelize = sequelize;
            })
            .else(config => {
                this._sequelize = new Sequelize(config.dbname, config.user, config.password, {
                    dialect: config.type,
                    port: config.port,
                    host: config.host,
                    logging: config.logging
                });
            })
            .execute(...arguments);
        this._models = {};
        fs.readdirSync(path.join(__dirname, "models"))
            .filter(file => {
                return file.indexOf(".") !== 0;
            })
            .forEach(file => {
                const model = this._sequelize.import(path.join(__dirname, "models", file));
                this._models[model.name] = model;
            });
        Object.values(this._models).forEach(model => {
            if (model.associate) {
                model.associate(this._models);
            }
        });
    }

    getDbInstance() {
        return this._sequelize;
    }

    async sync(options) {
        return this._sequelize.sync(options).then(() => {
            this._isSync = true;
        });
    }

    isSync() {
        return this._isSync;
    }

    getModels() {
        return this._models;
    }

    async authenticate() {
        return this._sequelize
            .authenticate()
            .then(() => {})
            .catch(err => {
                console.error("Unable to connect to the database:", err);
            });
    }
}
