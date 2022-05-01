//Functions to create database, tables, and load in the csv of food options
const mysql = require('mysql');
const fs = require('fs');
const { callbackify } = require('util');

let databaseName = "tuGoDB";
let tableName = "foodOptions";
let columns = "id SMALLINT(3) NOT NULL, name VARCHAR(50) NOT NULL, description TINYTEXT, " +
    "store VARCHAR(30) NOT NULL, price DOUBLE(4,2) NOT NULL, tags TINYTEXT, customizations MEDIUMTEXT, PRIMARY KEY (id)"

const dbConnector = {
    connection: mysql.createConnection({
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
	    let fileContents = dat;
        let lines = fileContents.split("\r\n");
        let labels = lines[0].split(",");

        for(let i = 1; i < lines.length; i++){
            let contents = lines[i].split(",");
            let id = contents[0];
            let name = contents[1];
            let description = (contents[2].split(";")).join(",");
            let store = contents[3];
            let price = contents[4];
            let tags = (contents[5].split(";")).join(",");
            let customizations = (contents[6].split(";")).join(",");
        
            dbConnector.loadOption("INSERT INTO " + tbName + " VALUES (" + id + ", '" + name + "', '" + description + "', '" + store + "', " + price + ", '" + tags + "', '" + customizations + "')");
        }
    });
}

//dbConnector.createTable(tableName, columns);
//loadFoodOptions(tableName);

exports.dbConnector = dbConnector;