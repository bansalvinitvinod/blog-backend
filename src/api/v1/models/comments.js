const db = require('../../../configs/db');

module.exports = db.sequelize.define('comments', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    content: {
        type: db.DataTypes.TEXT,
        allowNull: false
    }
});