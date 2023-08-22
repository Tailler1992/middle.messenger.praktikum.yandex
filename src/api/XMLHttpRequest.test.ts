import sinon, {SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest} from "sinon";
import {expect} from "chai";
import {HTTPTransport} from "./XMLHttpRequest";

describe("class HTTPTransport", () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    //@ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = (req) => {
      requests.push(req);
    };

    instance = new HTTPTransport("");
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  describe("method call", () => {
    const path = "";
    const options = {};

    it("Method get() should be called with GET method", () => {
      instance.get(path, options);

      const [request] = requests;

      expect(request.method).to.equal("GET");
    });

    it("Method post() should be called with POST method", () => {
      instance.post(path, options);

      const [request] = requests;

      expect(request.method).to.equal("POST");
    });

    it("Method put() should be called with PUT method", () => {
      instance.put(path, options);

      const [request] = requests;

      expect(request.method).to.equal("PUT");
    });

    it("Method patch() should be called with PATCH method", () => {
      instance.patch(path, options);

      const [request] = requests;

      expect(request.method).to.equal("PATCH");
    });

    it("Method delete() should be called with DELETE method", () => {
      instance.delete(path, options);

      const [request] = requests;

      expect(request.method).to.equal("DELETE");
    });
  });
});
