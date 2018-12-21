export default function(sequelize, DataTypes) {
    var Entity = sequelize.define(
        "entity",
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
                associate: function(models) {
                    Entity.belongsTo(models.User, { as: "owner" });
                    Entity.hasMany(models.Attribute);
                }
            }
        }
    );
    return Entity;
}
