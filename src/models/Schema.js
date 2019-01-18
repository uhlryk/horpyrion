import Sequelize from "sequelize";
import uuid from "uuid/v4";

export default function(sequelize, DataTypes) {
    const Schema = sequelize.define(
        "Schema",
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
