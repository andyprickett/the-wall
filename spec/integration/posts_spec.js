const request = require("request");
const server = require("../../app");
const base = "http://localhost:3000/posts";

describe("routes : posts", () => {
  // beforeEach(done => {
  //   this.post;

  //   sequelize.sync({ force: true }).then(res => {
  //     Post.create({
  //       title: "Post One",
  //       article: "The first of many posts."
  //     })
  //       .then(post => {
  //         this.post = post;
  //         done();
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         done();
  //       });
  //   });
  // });
  describe("GET /posts", () => {
    it("should return a status code 200", done => {
      request.get(base, (err, res, body) => {
        expect(err).toBeNull();
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
  // describe("GET /things", () => {
  //   it("should return a status code 200 and all things", done => {
  //     request.get(base, (err, res, body) => {
  //       expect(err).toBeNull();
  //       expect(res.statusCode).toBe(200);
  //       expect(body).toContain("Thing One");
  //       done();
  //     });
  //   });
  // });
  // describe("GET /things/new", () => {
  //   it("should render a new thing form", done => {
  //     request.get(`${base}/new`, (err, res, body) => {
  //       expect(err).toBeNull();
  //       expect(res.statusCode).toBe(200);
  //       expect(body).toContain("New Thing");
  //       done();
  //     });
  //   });
  // });
  // describe("POST /things/create", () => {
  //   it("should create a new thing and redirect", done => {
  //     const options = {
  //       url: `${base}/create`,
  //       form: {
  //         title: "Thing Two",
  //         description: "The second of many things"
  //       }
  //     };
  //     request.post(options, (err, res, body) => {
  //       Thing.findOne({ where: { title: "Thing Two" } })
  //         .then(thing => {
  //           expect(err).toBeNull();
  //           expect(res.statusCode).toBe(303);
  //           expect(thing.title).toBe("Thing Two");
  //           expect(thing.description).toBe("The second of many things");
  //           done();
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           done();
  //         });
  //     });
  //   });
  // });
  // describe("GET /things/:id", () => {
  //   it("should render a view with the selected thing", done => {
  //     request.get(`${base}/${this.thing.id}`, (err, res, body) => {
  //       expect(err).toBeNull();
  //       expect(res.statusCode).toBe(200);
  //       expect(body).toContain("Thing One");
  //       done();
  //     });
  //   });
  // });
});
