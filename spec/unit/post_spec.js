const sequelize = require("../../db/models/index").sequelize;
const Post = require("../../db/models").Post;

describe("Post", () => {
  beforeEach(done => {
    this.post;

    sequelize
      .sync({ force: true })
      .then(() => {
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
  describe("#create()", () => {
    it("should create a post object with a title and article", done => {
      Post.create({
        title: "Test Post One",
        article: "Test of the Post model."
      })
        .then(post => {
          expect(post.title).toBe("Test Post One");
          expect(post.article).toBe("Test of the Post model.");
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
    it("should not create a post object with missing title or article", done => {
      Post.create({
        title: "Test Post Two"
      })
        .then(post => {
          console.log("Hey, this code block should not be evaluated!");
          done();
        })
        .catch(err => {
          console.log(err.errors[0].message);
          expect(err).not.toBeNull;
          done();
        });
    });
  });
});
