module.exports = {
  index(req, res, next) {
    res.render("static/index", { title: "Hello, world!" });
  },
  notFound(req, res, next) {
    res.status(404).render("static/404", { title: "Not Found" });
  }
};
