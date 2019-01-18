import Sequelize from "sequelize";
import uuid from "uuid/v4";

export default function(sequelize, DataTypes) {
    const User = sequelize.define(
        "User",
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
            paranoid: true,
            classMethods: {}
        }
    );
    User.associate = function(models) {
        User.hasMany(models.Schema);
    };
    return User;
}
