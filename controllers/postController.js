const Post = require("../db/models").Post;
const staticController = require("./staticController");
const { validationResult } = require("express-validator/check");

module.exports = {
  index(req, res, next) {
    // res.send("TODO: list all posts");
    Post.findAll()
      .then(posts => {
        res.render("posts/index", { title: "Index of Posts", posts });
      })
      .catch(next);
  },
  new(req, res, next) {
    res.render("posts/new", {
      title: "New Post",
      oldData: {
        title: "",
        content: ""
      },
      validationErrorMessages: []
    });
  },
  create(req, res, next) {
    var newPost = {
      title: req.body.title,
      content: req.body.content
    };
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("posts/new", {
        title: "New Post",
        oldData: {
          title: newPost.title,
          content: newPost.content
        },
        validationErrorMessages: errors.array()
      });
    }
    Post.create({
      title: newPost.title,
      content: newPost.content
    })
      .then(post => {
        res.redirect(303, "/posts");
      })
      .catch(next);
  },
  show(req, res, next) {
    Post.findByPk(req.params.id)
      .then(post => {
        if (post === null) {
          staticController.notFound(req, res, next);
        } else {
          res.render("posts/show", { title: post.title, post });
        }
      })
      .catch(next);
  }
};
