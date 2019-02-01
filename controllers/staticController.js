module.exports = {
  index(req, res, next) {
    res.render("static/index", { title: "Hello, world!" });
  },
  notFound(req, res, next) {
    res.status(404).render("static/404", { title: "Not Found" });
  },
  errorHandler(err, req, res, next) {
    res.status(500).render("static/500", {
      title: "Internal Server Error",
      error: err
    });
  }
};
