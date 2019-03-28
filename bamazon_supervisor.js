var mysql      = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bamazon'
  });
   
  connection.connect(function(error){
    if (error){
      console.log('error',error);
    }
   console.log("connected!")
  });
  