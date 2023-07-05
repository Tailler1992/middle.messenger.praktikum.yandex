import {HTTPTransport} from "./XMLHttpRequest";

export abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  public create() {
    throw new Error("Not implemented");
  };

  public request() {
    throw new Error("Not implemented");
  }

  public update() {
    throw new Error("Not implemented");
  }

  public delete() {
    throw new Error("Not implemented");
  }
}
