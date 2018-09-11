// server.js
var http = require('http');
var url = require('url');

var handlePing = function(request, response) {
  sendResponse(response, 'PONG');
};

var routes = {
  '/ping': handlePing
};

var server = http.createServer(function(request, response) {
  var parts = url.parse(request.url);
  var route = routes[parts.pathname];
  if (route) route(request, response);
  else sendResponse(response, 'Not Found', 404);
}).listen(8080, '127.0.0.1');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};
