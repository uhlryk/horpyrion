export default function(sequelize, DataTypes) {
    const EntitySchema = sequelize.define(
        "EntitySchema",
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
                    EntitySchema.belongsTo(models.User, { as: "owner" });
                    EntitySchema.hasMany(models.Attribute);
                }
            }
        }
    );
    return EntitySchema;
}
