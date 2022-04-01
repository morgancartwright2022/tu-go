// This is our Express server
// It will handle all of the middleware and back-end data transfer
const express = require('express');
const db = require('./database/testdb.js');
const cors = require('cors');
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

app.get('/data', (req, res) => {
    // Route that shows the capabilities of sending data from databases
    db.dbConnector.getValue(value => {
        res.send(value);
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
// Use nodemon server.js to start