const Post = require("../db/models").Post;

module.exports = {
  index(req, res, next) {
    res.send("TODO: list all posts");
    // Thing.findAll()
    //   .then(things => {
    //     res.render("things/index", { title: "Index of Things", things });
    //   })
    //   .catch(next);
  }
  // new(req, res, next) {
  //   res.render("things/new", {
  //     title: "New Thing",
  //     oldData: {
  //       title: "",
  //       description: ""
  //     }
  //   });
  // },
  // create(req, res, next) {
  //   var newThing = {
  //     title: req.body.title,
  //     description: req.body.description
  //   };
  //   Thing.create({
  //     title: newThing.title,
  //     description: newThing.description
  //   })
  //     .then(thing => {
  //       res.redirect(303, "/things");
  //     })
  //     .catch(next);
  // },
  // show(req, res, next) {
  //   Thing.findByPk(req.params.id)
  //     .then(thing => {
  //       if (thing === null) {
  //         staticController.notFound(req, res, next);
  //       } else {
  //         res.render("things/show", { title: thing.title, thing });
  //       }
  //     })
  //     .catch(next);
  // }
};
