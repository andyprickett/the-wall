const express = require("express");
const app = express();
const http = require("http");

// Settings
app.set("port", normalizePort(process.env.PORT || "3000"));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

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
