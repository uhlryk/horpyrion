import Sequelize from "sequelize";
import uuid from "uuid/v4";
import ModelManager from "../ModelManager";

export default function(sequelize, DataTypes) {
    const Schema = sequelize.define(
        ModelManager.MODEL.SCHEMA,
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: () => uuid()
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {}
            }
        },
        {
            paranoid: true
        }
    );
    Schema.associate = function(models) {
        Schema.belongsTo(models.User);
        Schema.hasMany(models.Attribute);
        Schema.hasMany(models.Record);
    };
    return Schema;
}
