const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/node-api-mongodb", { useNewUrlParser: true})
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Connection failed", err);
    });

mongoose.connection;

const app = express();

app.use(express.json());

const routes = require('./routes.js');

app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
