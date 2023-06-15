# Final Project - Parts Store

This repository contains the final project that I developed using the skills I acquired at JRS Coding School. Here are step-by-step instructions to set up and run this project on your local machine.

## Setup MySQL Database

1. Download and install [MySQL](https://dev.mysql.com/downloads/installer/)
    - During the installation, when prompted, create a username as 'root' and password as 'admin'.
2. Download and install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
3. Create a new connection in MySQL Workbench:
    - Name it as 'MyConnection'.
    - Change the connection to 'localhost'. Keep all other settings as default.
4. Connect to the database:
    - Click on the 'MyConnection' to connect.
    - If prompted, enter the password (admin), click 'Save Password in Vault', and then click 'Connect'.

## Execute SQL Script

Next, execute the SQL script to set up the Parts Store Schema.

1. Find the SQL script at `~sqlScript.sql`
    - Open the file and select all, then copy the entire file. 
      Use the shortcuts: `CTRL+A` then `CTRL+C` (Windows) or `⌘+A` then `⌘+C` (Mac).
2. Paste the script into 'Query 1' in MySQL Workbench.
3. Execute the script by clicking the lightning bolt icon. 
   (Note: The automatic execution of the script might not work but it's still possible manually.)

## Start Rest API Server

0. Download and install [Visual Studio Code](https://code.visualstudio.com/download).
    - Open the PartsStore project folder in VS Code: `File -> Open...`
1. Open a terminal in VS Code: `Terminal -> New Terminal`.
2. Navigate to the server file: `cd ~/Partsstore/src/servers/server.js`.
3. Execute the server file: `$ node server.js`.

## Start the Application

1. Open a second terminal in VS Code.
2. Navigate to the project directory: `cd ~/partsStore`.
3. Execute the following commands to update dependencies, install packages and start the server:
```bash
$ npm update
$ npm install
$ ng s -o
```
Congratulations! The application should now be running in your local environment.
