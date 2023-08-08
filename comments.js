// Create web server
var express = require('express');
var app = express();

// Create a route for the root path
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Create a route for the path /about
app.get('/about', function(req, res) {
  res.send('About the app');
});

// Create a route for the path /contact
app.get('/contact', function(req, res) {
  res.send('Contact us');
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log('Server running on port 3000');
});