// This is our Express server
// It will handle all of the middleware and back-end data transfer
const express = require('express');
//const db = require('./database/displayQueries.js');
const cors = require('cors');
const { __values } = require('tslib');
const app = express();
const port = 3000;

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    // Basic GET route
    // Can also use POST/PUT/DELETE
    res.send("hello world");
});

app.get('/food', (req, res) => {
    const veggie = req.query.veggie;
    console.log(veggie)
    if(veggie === "true")
        res.send("Veggie!");
    else
        res.send("No veggie :(");
});
app.get('/user/:username', (req, res) => {
    res.send(req.params.username);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
// Use nodemon server.js to start