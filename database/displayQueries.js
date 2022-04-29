const mysql = require('mysql');

var tableName = "foodOptions";

const dbConnector = mysql.createConnection({
    host: 'database-1.c4ealzdwrdcb.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'SneakySnake$77',
    database: 'tuGoDB'
})

//storeName and tableName expected to be strings
function storeRetrieve(storeName, tbName){
    var selected;
    var sqlCom = "SELECT * FROM " + tbName + " WHERE store = '" + storeName + "'";
    dbConnector.query(sqlCom, function (er, res, fds){
        if(er) throw er;
        console.log(res.length + " entries retrieved.");
        selected = res;
    });
    return selected;
}

//tags expected to be an array and tableName to be a string
function tagRetrieve(tags, tbName){
    var selected = [];
    for(var i = 0; i < tags.length; i++){
        var sqlCom = "SELECT * FROM " + tbName + " WHERE tags LIKE " + "'%" + tags[i] + "%'";
        dbConnector.query(sqlCom, function(er, res, fds){
            if(er) throw er;
            console.log(res.length + " entries retrieved.");
            selected.push(res);
        });
    }
    var combinedSelects = new Set(selected);
    return combinedSelects;
}

//maxPrice and minPrice should be doubles and tableName to be a string
function priceRetrieve(maxPrice, minPrice, tbName){
    var selected;
    var sqlCom = 'SELECT * FROM ' + tbName + ' WHERE price >= ' + minPrice + ' and price <= ' + maxPrice;
    dbConnector.query(sqlCom, function(er, res, fds){
        if(er) throw er;
        console.log(res);
        selected = res;
    }); 
    return selected;
}

storeRetrieve("Freshii", tableName);
tagRetrieve(["breakfast", "vegetarian"], tableName);
priceRetrieve(10.00, 8.00, tableName)