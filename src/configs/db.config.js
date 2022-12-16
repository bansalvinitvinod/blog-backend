const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'vinit', 'Pass@123456!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;