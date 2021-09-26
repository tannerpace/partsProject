To setup this project to run on your own computer, follow 
these instructions: 

Setup a MySQL database.
    1. Download and install MySQL
        a. When prompted to create a username and password
            use 'root' and 'admin'
    2. Download and install MySQL Workbench
    3. Create a new connection in MySQL Workbench.
        a. Name it MyConnection
        b. change the connection to 'localhost' and keep all 
            other setting the same
    4. Click on the connection to connect
        a. if asked to enter your password, enter your password
            (admin) 
        b. click 'save password in vault'
        c. click connect

Then execute the SQL script to setup the Parts Store Schema
    1. Find the SQL script in ~sqlScript.sql
        a. Open the file 
        b. Select all and copy the whole file  
            (CTRL+A  then  CRTL+C) or (⌘+A  then  ⌘+C)
    2. In MySQL Workbench paste the script into 'Query 1'
    3. Click the lightning bolt icon to execute the entire script
        (running the script automatically is not working but is possible)

Then start the Rest API Server
    0.  a. Download install Visual Studio Code
        b. Open the PartsStore project folder in VS Code by 
            clicking File -> Open... 
    1. Open a terminal in VS Code by clicking 
        Terminal -> New Terminal
    2. cd to ~/Partsstore/src/servers/server.js
    3. execute the following command:
        $ node server.js

Then start the application
    1. Open a second terminal in VS Code
    2. cd to ~/partsStore
    3. execute the following commands:
        $ npm update
        $ npm install
        $ ng s -o
    
