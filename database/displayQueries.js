const mysql = require('mysql');

const dbConnector = {
    connection: mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''  
    }),
    storeRetrieve: (storeName, callback) => {
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE store = '" + storeName + "'", function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
        });
    },
    tagRetrieve: (tag, callback) => {
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE tags LIKE " + "'%" + tag + "%'", function(err, res, fds){
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res)
        });
    },
    priceRetrieve: (minPrice, maxPrice, callback) => {
        dbConnector.connection.query('SELECT * FROM foodOptions WHERE price >= ' + minPrice + ' and price <= ' + maxPrice, function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
        });
    }
}

exports.dbConnector = dbConnector;