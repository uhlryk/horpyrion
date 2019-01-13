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
            classMethods: {}
        }
    );
    User.associate = function(models) {
        User.hasMany(models.Schema);
    };
    return User;
}
