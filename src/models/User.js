export default function(sequelize, DataTypes) {
    const User = sequelize.define(
        "User",
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {}
            }
        },
        {
            paranoid: true,
            classMethods: {
                associate: models => {
                    User.hasMany(models.EntitySchema);
                }
            }
        }
    );
    return User;
}
