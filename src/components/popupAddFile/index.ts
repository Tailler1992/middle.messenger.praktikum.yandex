import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Button} from "../button";

import s from "./popupAddFile.module.pcss";

export class PopupAddFile extends Block {
  init() {
    this.children.button = new Button({
      text: "Поменять",
      type: "submit",
      name: "send",
    });
  }

  render() {
    const template = `
        <form action="/" class="${s.form}">
            <h3>Загрузите файл</h3>
            <a download>Выбрать файл на компьютере</a>
            {{{button}}}
        </form>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
