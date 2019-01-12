export default function(sequelize, DataTypes) {
    const EntityRecord = sequelize.define(
        "EntityRecord",
        {
            data: {
                type: DataTypes.JSONB
            }
        },
        {
            paranoid: true
        }
    );
    EntityRecord.associate = function(models) {
        EntityRecord.belongsTo(models.User, { as: "owner" });
        EntityRecord.belongsTo(models.EntitySchema);
    };
    return EntityRecord;
}
