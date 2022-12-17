const db = require('../../../configs/db');

module.exports = db.sequelize.define("roles", {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    role_title: {
        type: db.DataTypes.STRING(45),
        allowNull: false,
        unique: true
    }
});