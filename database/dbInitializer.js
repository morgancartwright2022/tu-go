//Functions to create database, tables, and load in the csv of food options
const mysql = require('mysql');
const fs = require('fs');
const { callbackify } = require('util');

let databaseName = "tuGoDB";

let foodTableName = "foodOptions";
let foodColumns = "id SMALLINT(3) NOT NULL, name VARCHAR(50) NOT NULL, description TINYTEXT, " +
    "store VARCHAR(30) NOT NULL, price DOUBLE(4,2) NOT NULL, tags TINYTEXT, customizations MEDIUMTEXT, PRIMARY KEY (id)"

let cartTableName = "cart";
let cartColumns = "username INT(7) NOT NULL, items MEDIUMTEXT NOT NULL, balance DOUBLE(5,2) NOT NULL, PRIMARY KEY (username)"

const dbConnector = {
    connection: mysql.createConnection({
        host: 'database-1.c4ealzdwrdcb.us-west-1.rds.amazonaws.com',
        user: 'admin',
        password: 'SneakySnake$77',
        database: 'tuGoDB'
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
    //Loads one option at a time
    loadOption: (indivQuery) => {
        dbConnector.connection.query(indivQuery, function(err, res, fds) {
            if(err) throw err;
            console.log("Insertion completed.")
        });
    }
}

//Parses CSV and loads each row into the database
function loadFoodOptions(tbName){
    fs.readFile("FoodOptions2.csv", "utf-8", function (err, dat) {
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

//dbConnector.createTable(foodTableName, foodColumns);
//loadFoodOptions(foodTableName);
//dbConnector.createTable(cartTableName, cartColumns);

exports.dbConnector = dbConnector;