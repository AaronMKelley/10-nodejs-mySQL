# 12-nodejs-mySQL

This application is a mock Amazon store that allows for different functions based on if you using from the customer or manager application. 

## Accessing Node and installing the proper npm packages. 
      First I needed to make sure that you have package.JSON install. In ther terminal, when 
      you are in the right local file, run "npm init -y" to install.
      Next I installed the mySQL and Inqurier packages, as they are required to have the app operate. 
   ![node](https://github.com/AaronMKelley/12-nodejs-mySQL/blob/master/Install%20mySQL%20npm.png)
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/Install%20Inqurier%20npm.png) 
       
      
# Bamazon Customer Mode 
The first use of the application is from the customers point of view. From here they can view products, decide what they want to buy, how many and what their total will be. 

     When a user first runs the application they will be presented with a table of the available 
     products, their respective departments, their price, and how many are in stock. 
     ![node] bamazon 
     
      Next they are prompted to pick a product based on its ID #. 
      ![node]  bamazon 2
      For our example we will use item ID #3 (throwrug) and decide to purchase 450. 
      ![node]  bamazon 3
      Our total is then displayed ($67495.5) and we are asked if we want to purchase another item. 
      ![node] bamazon 4
      When we select to see the whole table of products again you can see that the throwrugs now have 450 less in stock
      ![node] bamazon 5
      
      If you attempt to add more into your cart then there are in stock you will be shown this message. 
      ![node] bamazon 6
