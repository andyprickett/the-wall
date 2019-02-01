const express = require("express");

const staticController = require("./controllers/staticController");

const http = require("http");

const app = express();

// Settings
app.set("port", normalizePort(process.env.PORT || "3000"));

// Routes
app.get("/", staticController.index);

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(`Server is listening for requests on port ${app.get("port")}...`);
});

/* ---------- */

// Normalize Port for Server
function normalizePort(value) {
  // first
  var port = parseInt(value, 10);
  if (isNaN(port)) {
    return value;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
