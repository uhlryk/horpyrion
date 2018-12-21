import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

export default class ModelManager {
    constructor(config) {
        this._sequelize = new Sequelize(config.dbname, config.user, config.pass, {
            dialect: config.type,
            port: config.port
        });
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

    authenticate() {
        return this._sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch(err => {
                console.error("Unable to connect to the database:", err);
            });
    }
}
