export default function(sequelize, DataTypes) {
    var EntityValue = sequelize.define(
        "entityValue",
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            data: {
                type: DataTypes.JSONB
            }
        },
        {
            paranoid: true,
            classMethods: {
                associate: function(models) {
                    EntityValue.belongsTo(models.User, { as: "owner" });
                    EntityValue.belongsTo(models.Enity);
                }
            }
        }
    );
    return EntityValue;
}
