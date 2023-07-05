import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Link} from "../link";
import s from "./error.module.pcss";

interface ErrorProps {
  number: string;
  message: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  protected init() {
    this.children.link = new Link({
      label: "Назад к чатам",
      href: "/messenger",
    });
  }

  render() {
    const template = `
      <div class="${s.error}">
         <h1>{{ number }}</h1>
          <p class="${s.message}">{{ message }}</p>
          {{{ link }}}
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
