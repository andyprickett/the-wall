const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const staticController = require("./controllers/staticController");
const postController = require("./controllers/postController");

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
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post("/posts/create", postController.create);
app.get("/posts/new", postController.new);
app.get("/posts/:id", postController.show);
app.get("/posts", postController.index);

app.get("/", staticController.index);

//Catch-all Bad Routes
app.get("*", staticController.notFound);

// Catch-all Error Handler
app.use(staticController.errorHandler);

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
