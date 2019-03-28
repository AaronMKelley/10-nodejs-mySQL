
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
  displayItems();
});

function displayItems(){
connection.query('SELECT id, product_name, department_name,price, stock_quantity FROM products', function (error, results) {
  if (error) throw error;
  for (var i=0; i<results.length;i++){
    console.log("Product ID: "+results[i].id+ "| "+
                "Product: "+results[i].product_name+"| "+
                "Department: "+results[i].department_name+"| "+
                "Price: "+results[i].price+"| "+
                "Stock: "+results[i].stock_quantity+"| ");

  }
  transaction()
})};

function transaction(){
inquirer.prompt([
   {
    type: "input",
    message: "What product based on its ID",
    name: "ids",
   },
   {
   type: "input",
   message: "How many units would you like?",
   name: "units",
   }
  ])
  .then(function (response){
    // console.log(response.ids)
    var a = response.ids
    connection.query('SELECT * FROM products', function (error, results) {
      if (error) throw error;
      
      var pickedID;
      for (var i=0;i<results.length;i++){
        if (results[i].id===parseInt(a)){
          var pickedID = results[i]

     if (pickedID.stock_quantity>parseInt(response.units)){
      connection.query(
      "UPDATE products SET ? WHERE ?",
      [{
          stock_quantity: (pickedID.stock_quantity - parseInt(response.units)),
          product_sales: (pickedID.price*response.units)
        },
        {
         id: response.ids
        }
      ],
      function(error) {
       if (error) throw error;
          console.log("Thank you for shopping with us! Your total is " + "$" + parseInt(response.units) * pickedID.price);
          orderMore();
    }
      );
  
  }
       else{
        console.log("Insufficient quantity!")
          }
        } 
      }
    }); 
  })
};
 function orderMore(){
   inquirer.prompt ([
   {
    type: "confirm",
    message: "Would you like to order something else?",
    name: "confirm",
    default: true
   }
   ])
   .then(function(confirmation){
     if (confirmation.confirm==true){
       displayItems();
     }
     else {
       console.log("Thanks for coming by!")
       connection.end();
     }
   }
   )
 }
 