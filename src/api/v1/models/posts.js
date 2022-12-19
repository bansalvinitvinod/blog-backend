const db = require('../../../configs/db');

module.exports = db.sequelize.define('posts', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: db.DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: db.DataTypes.TEXT('medium'),
        allowNull: false
    },
    excerpt: {
        type: db.DataTypes.TEXT,
        allowNull: false
    },
    slug: {
        type: db.DataTypes.STRING(100),
        allowNull: false
    },
    status: {
        type: db.DataTypes.STRING(20),
        allowNull: false
    }
});