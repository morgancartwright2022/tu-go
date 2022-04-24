// An example of an object sending data from a MySql database
const mysql = require('mysql');

const dbConnector = {
    connection: mysql.createConnection({
        // All the info below is used to connect to our database
        // Make sure to fill this out if it is empty
        host     : '',
        user     : '',
        password : '',
        database : ''
    }),
    getValue: (callback) => {
        // Example of a database query
        /*dbConnector.connection.query('SELECT * FROM cats AS results', function (error, results, fields) {
            if (error) throw error;
            callback(results);
            // Note that we must use a callback function for this to work correctly
        });*/
    }
}

exports.dbConnector = dbConnector;