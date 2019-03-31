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
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Bamazon%20Customer.png)
     
      Next they are prompted to pick a product based on its ID #. 
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Bamazon%20Customer-02.png)
      
      For our example we will use item ID #3 (throwrug) and decide to purchase 450. 
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Bamazon%20Customer-03.png)
      
      Our total is then displayed ($67495.5) and we are asked if we want to purchase another item. 
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Bamazon%20Customer%20-04.png)
      
      When we select to see the whole table of products again you can see that the throwrugs now have 450 less in stock
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Bamazon-05.png)
      
      If you attempt to add more into your cart than there are in stock you will be shown this message. 
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Bamazon-06.png)

# Bamazon Manager Mode 
 The second application allows you to control the functions of the manager. From here you can view the products for sale, view low inventory, add to the inventory of a product, and add all the details of an entirely new product. 
      
    When a user first runs the application (' node bamazon_manager.js') they will be presented with four menu options as detailed below. 
  ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Manager%2001.png)
    
    When we choose the first option, "View Products for Sale", we see a running table of all the currently available products.
    
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Manager%202.png)
   
    When we chose the second option "View Low Inventory", we see all products that have an inventory stock of less than 5. In this example both the popcorn and dictionaries only have a stock quantity of 4. 
    
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Manager%2003.png)
   
      For the third option "Add To Inventory" you are prompted to choose the product you want to add stock to and then the quantity. In this example I decided to add 80 pairs of running shoes to my inventory. If done successfully, you will get an "Updated!" message as seen below. If you try to add to the inventory of a product that does not exist in our store nothing is changed.
   ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Manager%2004.png)
   
    Lastly, if you want to add a completely new product to the store, you will choose the fourth options "Add New Product". Doing so will prompt you put in the name of the product, the dept. that it belongs to, it's price, and how many you have. If done correct it will say "New Product Added" and when you go back to view the products you will see it inserted into the table. In our example the product we added was "Goggles" 
 ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Manager%2005.png)
 ![node](https://raw.githubusercontent.com/AaronMKelley/12-nodejs-mySQL/master/assets/Run%20Manager%2006.png)
   
   
    
    
  
 
