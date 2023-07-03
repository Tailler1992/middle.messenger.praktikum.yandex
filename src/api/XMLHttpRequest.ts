enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

interface Options {
  headers?: Record<string, any>;
  method?: METHOD;
  data?: Record<string, any>;
  timeout?: number;
}

export class HTTPTransport {
  static URL = "https://ya-praktikum.tech/api/v2";
  route: string;

  constructor(endpoint: string) {
    this.route = HTTPTransport.URL + endpoint;
  }

  public get(path: string, options: Options) {
    return this.request(this.route + path, {
      ...options,
      method: METHOD.GET,
    }, options?.timeout);
  };

  public post(path: string, options: Options) {
    return this.request(this.route + path, {
      ...options,
      method: METHOD.POST,
    }, options?.timeout);
  };

  public put(path: string, options: Options) {
    return this.request(this.route + path, {
      ...options,
      method: METHOD.PUT,
    }, options?.timeout);
  };

  public patch(path: string, options: Options) {
    return this.request(this.route + path, {
      ...options,
      method: METHOD.PATCH,
    }, options?.timeout);
  };

  public delete(path: string, options: Options) {
    return this.request(this.route + path, {
      ...options,
      method: METHOD.DELETE,
    }, options?.timeout);
  };

  private request = (url: string, options: Options, timeout: number = 5000) => {
    const {headers = {}, method, data} = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.withCredentials = true;
      xhr.responseType = "json";
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
