import {expect} from "chai";
import {queryStringify} from "./queryStringify";

describe("function queryStringify", () => {
  describe("array", () => {
    it("works with an array of numbers", () => {
      const received = queryStringify([1, 2]);
      const expected = "?0=1&1=2";

      expect(received).to.equal(expected);
    });

    it("works with an array of strings", () => {
      const received = queryStringify(["2", "3"]);
      const expected = "?0=2&1=3";

      expect(received).to.equal(expected);
    });
  });

  describe("simple types", () => {
    it("Should throw an error if data param is not a object (Must not accept a number)", () => {
      //@ts-expect-error
      const fn = () => queryStringify(1);

      expect(fn).to.throw(Error);
    });

    it("Should throw an error if data param is not a object (Must not accept a string)", () => {
      //@ts-expect-error
      const fn = () => queryStringify("1");

      expect(fn).to.throw(Error);
    });
  });

  describe("object", () => {
    it("works with an empty object", () => {
      const received = queryStringify({});
      const expected = "?";

      expect(received).to.equal(expected);
    });

    it("works with an object with properties", () => {
      const received = queryStringify({"first": 1, "second": 2});
      const expected = "?first=1&second=2";

      expect(received).to.equal(expected);
    });

    it("works with an object with properties", () => {
      const received = queryStringify({"first": 1, "second": 2, "third": [1, 2]});
      const expected = "?first=1&second=2&third=1,2";

      expect(received).to.equal(expected);
    });
  });
});
