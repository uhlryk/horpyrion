export default function(sequelize, DataTypes) {
    const EntityRecord = sequelize.define(
        "EntityRecord",
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
                    EntityRecord.belongsTo(models.User, { as: "owner" });
                    EntityRecord.belongsTo(models.EnitySchema);
                }
            }
        }
    );
    return EntityRecord;
}
