const mysql = require('mysql');

const dbConnector = {
    connection: mysql.createConnection({
        host: 'database-1.c4ealzdwrdcb.us-west-1.rds.amazonaws.com',
        user: 'admin',
        password: 'SneakySnake$77',
        database: 'tuGoDB'
    }),
    //For FOOD OPTIONS
    storeRetrieve: (storeName, callback) => {
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE store = '" + storeName + "'", function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
        });
    },
    //For FOOD OPTIONS
    tagRetrieve: (tags, callback) => {
        let tagsSubstr = "";
        for(let i = 0; i < tags.length; i++){
            if((i + 1) < tags.length) tagsSubstr = tagsSubstr + " tags LIKE '%" + tags[i] + "%' AND "
            else tagsSubstr = tagsSubstr + "tags LIKE '%" + tags[i] + "%'"
        }
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE " + tagsSubstr, function(err, res, fds){
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
        });
    },
    //For FOOD OPTIONS
    priceRetrieve: (minPrice, maxPrice, callback) => {
        dbConnector.connection.query('SELECT * FROM foodOptions WHERE price >= ' + minPrice + ' and price <= ' + maxPrice, function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
        });
    },
    //For FOOD OPTIONS
    idRetrieve: (idNum, callback) => {
        dbConnector.connection.query('SELECT * FROM foodOptions WHERE id = ' + idNum, function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
        });
    },
    //For CARTS (This will do updates)
    addToCart: (user, allItems, price, callback) => {
        dbConnector.connection.query("UPDATE cart SET items = '" + allItems + "', balance = " + price + " WHERE username = " + user, function(err, res, fds){
            if(err) throw err;
            console.log(res.length + " entries created.");
            callback(res);
        });

    },
    //For CARTS (This will create a new entry)
    createNewCart: (user, item, price, callback) => {
        dbConnector.connection.query("INSERT INTO cart VALUES (" + user + ", '" + item + "', " + price + ")", function(err, res, fds){
            if(err) throw err;
            console.log(res.length + " entries created.");
            callback(res);
        });
    },
    //For CARTS
    deleteExistingCart: (user, callback) => {
        dbConnector.connection.query('DELETE FROM cart WHERE username = ' + user, function(err, res, fds) {
            if(err) throw err;
            console.log(res + " entries deleted.");
            callback(res);
        });
    },
    //For CARTS
    removeFromCart: () => {
        //This will do updates
    },
    retrieveCart: (user, callback) => {
        dbConnector.connection.query('SELECT * FROM cart WHERE username = ' + user, function(err, res, fds) {
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            console.log(res);
            callback(res);
        });
    }
}

exports.dbConnector = dbConnector;