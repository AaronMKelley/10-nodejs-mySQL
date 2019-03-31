var mysql      = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'bamazon'
  });
   
  
  
supervisorMode();

  function supervisorMode(){
    connection.connect(function(error){
      if(error){
        console.log('error',error);
      }
      console.log("success")
    })
  
  inquirer.prompt([
    {
      type:"checkbox",
      name:"supervisor",
      message:"Supervisor Menu Options",
      choices:[
        {name:"View Sales by Product",value:1},
        {name:"Create New Department", value:2},

      ]
    },
  ])
    .then(function(response){
      connection.query('SELECT id, department_names,over_head_costs,product_sales FROM departments',function(error,results){
        if (error) throw error;
        // show all sales 
        for (var i=0; i<results.legnth; i++){
        if (response.supervisor==1){
          console.log("Department ID: "+results[i].id+ "| "+
                "Department Name: "+results[i].departments_name+"| "+
                "Overhead Costs: "+results[i].over_head_costs+"| "+
                "Product Sales"+results[i].product_sales+"| "
                // "Total Profits: "+(results[i].product_sales-results[i].over_head_costs)+"| "
                );
        }
        }
      })
    })
  }