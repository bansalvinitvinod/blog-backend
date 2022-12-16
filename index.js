const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('./src/configs/db.config')

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });
