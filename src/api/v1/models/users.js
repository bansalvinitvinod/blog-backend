const db = require('../../../configs/db');

module.exports = db.sequelize.define('users', {
    id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type: db.DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: db.DataTypes.STRING(128),
        allowNull: false
    },
    first_name: {
        type: db.DataTypes.STRING(20)
    },
    last_name: {
        type: db.DataTypes.STRING(20)
    },
    display_name: {
        type: db.DataTypes.STRING(20)
    },
    email: {
        type: db.DataTypes.STRING(320)
    },
    phone: {
        type: db.DataTypes.STRING(10)
    },
    status: {
        type: db.DataTypes.STRING(10)
    }
});