export default function(sequelize, DataTypes) {
    var Attribute = sequelize.define(
        "attribute",
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
                    Attribute.belongsTo(models.Entity);
                }
            }
        }
    );
    return Attribute;
}
