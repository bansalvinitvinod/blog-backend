module.exports = (sequelize, DataTypes) => {
    sequelize.define("roles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        role_title: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        }
    });
}