var mysql      = require('mysql');
var inquirer = require('inquirer');
require('events').EventEmitter.defaultMaxListeners = 20;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bamazon'
  });
 
managerMode()

  function managerMode(){
  connection.connect(function(error){
    if (error){
      console.log('error',error);
    }
    console.log("success")
  });

  inquirer.prompt([
    {
     type: "checkbox",
     name:"addition",
     message: "Menu Options",
     choices:[
         {name:"View Products for Sale", value:1},
         {name:"View Low Inventory", value:2},
         {name:"Add to Inventory", value:3},
         {name:"Add New Product", value:4},

     ]

    },
    
   ])
   .then(function (response){
    connection.query('SELECT * FROM products', function (error, results) {
        if (error) throw error;
 /* show all of the inventory */       
 for (var i=0;i<results.length;i++){
 if (response.addition==1){
        console.log("Product ID: "+results[i].id+ "| "+
        "Product: "+results[i].product_name+"| "+
        "Department: "+results[i].department_name+"| "+
        "Price: "+results[i].price)+"| "+
        "Stock "+results[i].stock_quantity;
        
 }
    
 /*show products if their inventory is less then */   
   else if (response.addition==2 && results[i].stock_quantity<5){
                    console.log(results[i])
                    anotherPrompt();
        }}
 /*updating inventory */       
    if (response.addition==3){
        inquirer.prompt([
            {type: "input",
            name:"product",
            message:"What product do you want add more inventory to?"
        },
        {type: "input",
         name:"update",
         message:"How much would you like to add?"

        }
        ])
        .then(function(changes){
            connection.query('SELECT * FROM products',function(error,results){
                if (error) throw error;
                for (var i=0;i<results.length;i++){
                  if(results[i].product_name==changes.product){
                    connection.query(
                    'UPDATE products SET ? WHERE ?',
                    [{
                        stock_quantity:(results[i].stock_quantity+parseInt(changes.update))
                    },
                    {   product_name: changes.product
                        
                        }
                    ],function (error){
                        if (error)throw error;
                        console.log("Updated!")
                      anotherPrompt();
                    }
                    )
                  }
                }
            })
        })
    }
    else if (response.addition==4){
        inquirer.prompt([
          {  type:"input",
            message:"What is the name of the product?",
            name: "name"
        },
           { 
               type:"input",
               message:"What department does the item belong to?",
               name: "department"
           },
           {
               type:"input",
               message:"How much does it cost?",
               name: "price"
           },
           {
               type:"input",
               message:"How many do you have?",
               name: "stock"
           }
        ])
        .then(function (newProduct){
          
         var query= connection.query(
                "INSERT INTO products SET ?",
                [ 
                  {  product_name: newProduct.name,
                    department_name: newProduct.department,
                    price:parseInt(newProduct.price),
                    stock_quantity: parseInt(newProduct.stock),
                    product_sales:0
                }
                ],
                function(error){
                    console.log(query.sql)
                    if (error) throw error;
                    console.log("New Product Added!")
                    anotherPrompt();
                }
            )
        })
 
    }

    })
    })};

    function anotherPrompt(){
        inquirer.prompt([
            {type:"confirm",
            message: "Perform another action?",
            name: "confirm",
            default: true
        }
        ])
        .then(function(confirmation){
            if (confirmation.confirm==true){
                managerMode();
            }
            else {
                console.log("Thanks for coming by!")
                // connection.end();
            }
        })
    }