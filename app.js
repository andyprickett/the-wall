const express = require("express");

const path = require("path");

const staticController = require("./controllers/staticController");

const http = require("http");

const app = express();

// Database connected?
// const db = require("./db/models").sequelize;

// db.authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch(err => console.log("Error: " + err));

// Settings
app.set("port", normalizePort(process.env.PORT || "3000"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", staticController.index);

//Catch-all Bad Routes
app.get("*", staticController.notFound);

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
