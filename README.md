# Project
Aws Ecommerce application

# Get started
1) Download the zip file in your system.
2) Extract the zip file in your system.
3) Find the scripts folder that contains scripts to guide you through the process.

# Steps
1) Create an ec2 instance 
2) SSH to your ec2 instance using the command given in ssh document file in scripts folder (Alternatively, you can use putty)
3) Switch to root user using command - sudo su
4) Create directory app in /usr/src using command - sudo mkdir app
Note: You should allow permissions for ubuntu user to access app, so run command - sudo chown -R ubuntu app/
5) Follow the steps as mentioned in setting up node document file in scripts folder
6) Once node is setup in ec2 instance, transfer your code files to /usr/src/app folder of your ec2-instance through any ftp tool (I used filezilla)
7) Go to project directory using cd by - cd /usr/src/app and then run the command npm -i to install all dependencies
8) Start node using command - node server.js
Note: Make sure you cd to your project directory that is cd/usr/src/app

# Additional Info
The command "node server.js" will run as long as your console or terminal is open. To make it run forever follow the commands below -
npm i -g forever
forever server.js
