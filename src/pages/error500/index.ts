import Handlebars from "handlebars";
import {Error} from "../../components";
import {Block} from "../../core/Block";
import s from "./error500.module.pcss";

export class Error500 extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.error = new Error({
      message: "Мы уже фиксим",
      number: "500",
    });
  }

  render() {
    const template = `
    <main class="${s.container}">
        {{{error}}}
    </main>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
