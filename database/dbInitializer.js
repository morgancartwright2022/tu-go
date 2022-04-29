//Functions to create database, tables, and load in the csv of food options
const mysql = require('mysql');
const fs = require('fs');
const { callbackify } = require('util');

var databaseName = "tuGoDB";
var tableName = "foodOptions";
var columns = "id SMALLINT(3) NOT NULL, name VARCHAR(50) NOT NULL, description TINYTEXT, " +
    "store VARCHAR(30) NOT NULL, price DOUBLE(4,2) NOT NULL, tags TINYTEXT, customizations TINYTEXT, PRIMARY KEY (id)"

const dbConnector = {
    connection: mysql.createConnection({
        // All the info below is used to connect to our database
        // Make sure to fill this out if it is empty
        host: '',
        user: '',
        password: '',
        database: ''
    }),
    createDatabase: (dbName) => {
        dbConnector.connection.query('CREATE DATABASE ' + dbName, function(err, res, fds) {
            if(err) throw err;
            console.log(dbName + " created.");
        });
    },
    createTable: (tbName, columns) => {
        dbConnector.connection.query('CREATE TABLE ' + tbName + '(' + columns + ')', function(err, res, fds) {
            if(err) throw err;
            console.log(tbName + " created.");
        });
    },
    loadOption: (indivQuery) => {
        dbConnector.connection.query(indivQuery, function(err, res, fds) {
            if(err) throw err;
            console.log("Insertion completed.")
        });
    }
}


function loadFoodOptions(tbName){
    fs.readFile("FoodOptions.csv", "utf-8", function (err, dat) {
	    if(err) return console.error(err);
	    var fileContents = dat;
        var lines = fileContents.split("\r\n");
        var labels = lines[0].split(",");

        for(var i = 1; i < lines.length; i++){
            var contents = lines[i].split(",");
            var id = contents[0];
            var name = contents[1];
            var description = (contents[2].split(";")).join(",");
            var store = contents[3];
            var price = contents[4];
            var tags = (contents[5].split(";")).join(",");
            var customizations = (contents[6].split(";")).join(",");
        
            dbConnector.loadOption("INSERT INTO " + tbName + " VALUES (" + id + ", '" + name + "', '" + description + "', '" + store + "', " + price + ", '" + tags + "', '" + customizations + "')");
        }
    });
}

//dbConnector.createTable(tableName, columns);
//loadFoodOptions(tableName);

exports.dbConnector = dbConnector;