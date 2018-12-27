export default function(sequelize, DataTypes) {
    const Attribute = sequelize.define(
        "Attribute",
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
                    Attribute.belongsTo(models.EntitySchema);
                }
            }
        }
    );
    return Attribute;
}
