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
  describe("GET /404", () => {
    it("should return status code 404 and have expected text in the body of the response", done => {
      request.get(`${base}/404`, (err, res, body) => {
        expect(res.statusCode).toBe(404);
        expect(body).toContain("Not Found");
        done();
      });
    });
  });
});
