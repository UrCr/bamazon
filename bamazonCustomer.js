
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require( "console.table");

var connection = mysql.createconnection({
    host: "loaclhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Bamazon_db"
});
  

function begin(){
    connection.connect(function(err){
        if (err) throw err;
        console.log(" bamazon error ")

    
}

var showProducts = function() {

    
}

