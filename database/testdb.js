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
<<<<<<< HEAD
    })
}

var databaseName = '';
var tableName = "foodOptions";
var columns = "id SMALLINT(3), name VARCHAR(50), description TINYTEXT, store VARCHAR(30), price DOUBLE(4,2), tags TINYTEXT, customizations TINYTEXT"

createDatabase(databaseName);
createTable(tableName, columns);
loadFoodOptions(tbName);

function createDatabase(dbName){
    dbConnector.connect(function(er){
        if(er) throw er;
        else{
            console.log("Connection established.");
            dbConnector.query('CREATE DATABASE ' + dbName, function (er, res){
                if(er) throw er;
                else console.log( dbName + " created.");
            });
        }
    });
}

function createTable(tbName, columns){
    dbConnector.connect(function(er){
        if(er) throw er;
        else{
            console.log("Connection established.");
            var sqlCom = 'CREATE TABLE ' + tbName + '(' + columns + ')';
            dbConnector.query(sqlCom, function (er, res){
                if(er) throw er;
                else console.log(tbName + " created.");
            });
        }
    });
}

function loadFoodOptions(tbName){
    columnNames = ["id", "name", "description", "store", "price", "tags", "customizations"]

    const fs = require("fs");
    
    var fileContents = fs.readFile("FoodOptions.csv", "utf-8", (er, dat) => {if(er) throw er;})
    var lines = fileContents.split(/\r\n | \n/);
    var labels = lines[0].split(",");
    var queries = [];

    for(var i = 1; i < labels.length; i++){
        var contents = lines[i].split(",");
        var id = contents[0];
        var name = contents[1];
        var description = (contents[2].split(";")).join(",");
        var store = contents[3];
        var price = contents[4];
        var tags = (contents[5].split(";")).join(",");
        var customizations = (contents[6].split(";")).join(",");
        
        dbConnector.connect(function(er){
            if(er) throw er;
            else{
                console.log("Connection established.");
                var sqlCom = 'INSERT INTO ' + tbName + ' VALUES (' + id + ', ' + name + ', ' + description + ', ' + store + ', ' + price + ', ' + tags + ', ' + customizations + ')';
                dbConnector.query(sqlCom, function(er, res){
                    if(er) throw er;
                    else console.log("Entry " + id + " created.");
                });
            }
        });  
=======
    }),
    getValue: (callback) => {
        // Example of a database query
        /*dbConnector.connection.query('SELECT * FROM cats AS results', function (error, results, fields) {
            if (error) throw error;
            callback(results);
            // Note that we must use a callback function for this to work correctly
        });*/
>>>>>>> ca587f70f38d49fb23e8c21bb6bf7acb20c59f5a
    }
}

exports.dbConnector = dbConnector;