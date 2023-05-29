import Handlebars from "handlebars";
import Block from "../../core/Block";
import {ContentHeader, ContentFooter, ContentMessages} from "../";
import s from "./error.module.pcss";

interface ErrorProps {
  number: string;
  message: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  render() {
    const template = `
      <div class="${s.error}">
         <h1>{{number}}</h1>
          <p class="${s.message}">{{message}}</p>
          <a href="/">Назад к чатам</a>
      </div>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
