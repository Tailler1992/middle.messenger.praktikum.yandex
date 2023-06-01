import Handlebars from "handlebars";
import {Error} from "../../components";
import {Block} from "../../core/Block";
import s from "./error404.module.pcss";

export class Error404 extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.error = new Error({
      message: "Не туда попали",
      number: "404",
    });
  }

  render() {
    const template = `
    <main class="${s.container}">
        {{{error}}}
    </main>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
