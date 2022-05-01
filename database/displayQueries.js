const mysql = require('mysql');

const dbConnector = {
    connection: mysql.createConnection({
        host: 'database-1.c4ealzdwrdcb.us-west-1.rds.amazonaws.com',
        user: 'admin',
        password: 'SneakySnake$77',
        database: 'tuGoDB'  
    }),
    storeRetrieve: (storeName, callback) => {
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE store = '" + storeName + "'", function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res)
        });
    },
    tagRetrieve: (tag) => {
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE tags LIKE " + "'%" + tag + "%'", function(err, res, fds){
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
        });
    },
    priceRetrieve: (maxPrice, minPrice) => {
        dbConnector.connection.query('SELECT * FROM foodOptions WHERE price >= ' + minPrice + ' and price <= ' + maxPrice, function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
        });
    }
}

exports.dbConnector = dbConnector;