const request = require("request");
const server = require("../../app");
const base = "http://localhost:3000";

describe("routes : static", () => {
  describe("GET /", () => {
    it("should return status code 200 and have expected text in the body of the response", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Hello, world!");
        done();
      });
    });
  });
});
