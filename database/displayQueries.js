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
    tagRetrieve: (tags, callback) => {
        let tagsSubstr = "";
        for(let i = 0; i < tags.length; i++){
            if((i + 1) < tags.length) tagsSubstr = tagsSubstr + " tags LIKE '%" + tags[i] + "%' AND "
            else tagsSubstr = tagsSubstr + "tags LIKE '%" + tags[i] + "%'"
        }
        console.log("SELECT * FROM foodOptions WHERE " + tagsSubstr);
        dbConnector.connection.query("SELECT * FROM foodOptions WHERE " + tagsSubstr, function(err, res, fds){
            if(err) throw err;
            console.log(res.length + " entries retrieved.");
            callback(res);
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