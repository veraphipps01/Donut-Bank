# Bad Bank App Week 27

### Project Title
##      BadBank Application


![ReadMEVideo](https://github.com/veraphipps01/BadBank27/blob/main/Badbank.gif)

### Description

This app was created as a homework project for the full-stack with React part in a web development bootcamp. It was initially built via create-react-app and connected to backend via Express and MongoDB.

### Installation Guidelines

The only-front-end version of the app is currently deployed on [AWS](http://bankappukraine.s3-website-us-west-1.amazonaws.com/), it can be run via local server which requires the following steps: 
* Clone the repository to your local machine
* Install node.js
* Run npm install (to create the node modules) in the project folder
  * Run npm install express
  * Run npm install cors
  * Run npm install mongodb
* Run node index.js (to start the server) in the project folder.  
* Browse to http://localhost:3000

### Technology used

     React, Node, JS, HTML, CSS, Express, MongoDB 
     
### Features

The project's best features include a dynamic navigation bar but also code specific for user context (i.e., mirroring deposits and withdrawals in the user’s balance). The userContext code can be generalized to other applications where such a functionality is needed if this app is used without backend, otherwise it uses MongoDB to add new users.

### License

This project is licensed under the [MIT License](LICENSE.md).
