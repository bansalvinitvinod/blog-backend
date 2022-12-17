const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('blog', 'vinit', 'Pass@123456!', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

const db = {};

// Core Items
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.roles = require('../models/roles.model')(sequelize, DataTypes);

sequelize.sync({force:true})
    .then(() => {
        console.log("Synced successfully");
    })
    .catch((err) => {
        console.log("Sync failed: "+err);
    })

module.exports = db;