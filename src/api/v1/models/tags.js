const db = require('../../../configs/db');

module.exports = db.sequelize.define('tags', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: db.DataTypes.STRING(45),
        allowNull: false
    }
});