import Sequelize from "sequelize";
import uuid from "uuid/v4";
import ModelManager from "../ModelManager";

export default function(sequelize, DataTypes) {
    const Record = sequelize.define(
        ModelManager.MODEL.RECORD,
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: () => uuid()
            },
            data: {
                type: DataTypes.JSONB
            }
        },
        {
            paranoid: true
        }
    );
    Record.associate = function(models) {
        Record.belongsTo(models.User);
        Record.belongsTo(models.Schema);
    };
    return Record;
}
