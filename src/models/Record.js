export default function(sequelize, DataTypes) {
    const Record = sequelize.define(
        "Record",
        {
            data: {
                type: DataTypes.JSONB
            }
        },
        {
            paranoid: true
        }
    );
    Record.associate = function(models) {
        Record.belongsTo(models.User);
        Record.belongsTo(models.Schema);
    };
    return Record;
}
