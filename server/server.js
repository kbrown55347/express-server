console.log('Look at me go!');

// bring express into your project
// you will need to `npm init --yes` and `npm install express` first

// Load express library from node_modules/express:
const express = require('express');

// Create a variable called "app," OUR SERVER:
const app = express();

// Tell express where to find our "public" files.
    // aka "the client-side files"
    // aka "static assets"
    // aka "what we've been doing already"
app.use(express.static('./server/public'));


// Starts server and listens for requests:
// 500 is the port (personal note)
app.listen(5000, function() {
    console.log('Your first express server is running!');
});

// type in terminal: 
    // node server/server.js to run server
    // control + c to exit server
// website to access:  localhost:5000