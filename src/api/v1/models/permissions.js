const db = require('../../../configs/db');

module.exports = db.sequelize.define('permissions', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    type: {
        type: db.DataTypes.STRING(45),
        allowNull: false
    },
    permission_for: {
        type: db.DataTypes.STRING(45),
        allowNull: false
    }
});