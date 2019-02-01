const request = require("request");
const server = require("../../app");
const base = "http://localhost:3000/posts";

const sequelize = require("../../db/models/index").sequelize;
const Post = require("../../db/models").Post;

describe("routes : posts", () => {
  beforeEach(done => {
    this.post;

    sequelize.sync({ force: true }).then(res => {
      Post.create({
        title: "Post One",
        content: "The first of many posts."
      })
        .then(post => {
          this.post = post;
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
  describe("GET /posts", () => {
    it("should return a status code 200", done => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
  describe("GET /posts", () => {
    it("should return a status code 200 and all posts", done => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Post One");
        done();
      });
    });
  });
  describe("GET /posts/new", () => {
    it("should render a new post form", done => {
      request.get(`${base}/new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(res.statusCode).toBe(200);
        expect(body).toContain("New Post");
        done();
      });
    });
  });
  describe("POST /posts/create", () => {
    it("should create a new post and redirect", done => {
      const options = {
        url: `${base}/create`,
        form: {
          title: "Post Two",
          content: "The second of many posts"
        }
      };
      request.post(options, (err, res, body) => {
        Post.findOne({ where: { title: "Post Two" } })
          .then(post => {
            expect(err).toBeNull();
            expect(res.statusCode).toBe(303);
            expect(post.title).toBe("Post Two");
            expect(post.content).toBe("The second of many posts");
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });
  describe("GET /posts/:id", () => {
    it("should render a view with the selected post", done => {
      request.get(`${base}/${this.post.id}`, (err, res, body) => {
        expect(err).toBeNull();
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Post One");
        done();
      });
    });
  });
});
