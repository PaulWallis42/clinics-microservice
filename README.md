# Clinics MicroService

A small server with an API data endpoint '/clinics/city/:name' that returns a json object and a service endpoint '/healthcheck' that returns the current status of the API consumed in '/clinics/city/:name'.

The app is written using Node.js with the following npm dependencies:
* express
* request
* health-check-api

## Getting Started
* Clone this repository to your computer
* Install Node.js from the Node.js website if not already installed
* Using your command line navigate to the directory where you have saved the clone and run 'npm install' to install the dependencies from the package.json file
* In the command line type 'node index' and the server will be up and running on localhost port 3000 (this should be confirmed with a message in the server console)
