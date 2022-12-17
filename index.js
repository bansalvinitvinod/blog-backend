const express = require('express');
const db = require('./src/configs/db.config')

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send('App running')
});

app.listen({port: 3000}, async() =>{
    console.log("Running");
});