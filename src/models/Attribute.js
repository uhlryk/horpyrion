import Sequelize from "sequelize";
import uuid from "uuid/v4";

export default function(sequelize, DataTypes) {
    const Attribute = sequelize.define(
        "Attribute",
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
    Attribute.associate = function(models) {
        Attribute.belongsTo(models.Schema);
    };
    return Attribute;
}
