export default function(sequelize, DataTypes) {
    var User = sequelize.define(
        "user",
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
                    User.hasMany(models.Entity);
                }
            }
        }
    );
    return User;
}
