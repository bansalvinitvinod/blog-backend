const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen({port: 3000}, async() =>{
    console.log("Server has been started at http://localhost:3000");
});