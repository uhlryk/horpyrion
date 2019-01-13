export default function(sequelize, DataTypes) {
    const Schema = sequelize.define(
        "Schema",
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {}
            }
        },
        {
            paranoid: true
        }
    );
    Schema.associate = function(models) {
        Schema.belongsTo(models.User);
        Schema.hasMany(models.Attribute);
        Schema.hasMany(models.Record);
    };
    return Schema;
}
