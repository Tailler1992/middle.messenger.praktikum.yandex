import Handlebars from "handlebars";
import Block from "../../core/Block";
import {Button} from "../";
import s from "./profileBlock.module.pcss";

interface ProfileBlockProps {
  name?: string;
  children: any;
  btn?: boolean;
}

export class ProfileBlock extends Block {
  constructor(props: ProfileBlockProps) {
    super(props);
  }

  init() {
    this.children.button = new Button({
      text: "Сохранить",
      name: "save",
      type: "submit",
      className: `${s.btn}`,
    });
  }

  render() {
    const template = `
      <div class="${s.profileBlock}">
        <div class="${s.avatar}">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="#D6E4E5" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46 2H4C2.89543 2 2 2.89543 2 4V31.6998L18.6547
                27.8137C19.5486 27.6051 20.4635 27.4998 21.3814 27.4998H28.6185C29.5365 27.4998 30.4514 27.6051 31.3453
                27.8137L48 31.6998V4C48 2.89543 47.1046 2 46 2ZM4 0C1.79086 0 0 1.79086 0 4V46C0 48.2091 1.79086 50 4
                50H46C48.2091 50 50 48.2091 50 46V4C50 1.79086 48.2091 0 46 0H4ZM13.6364 18.182C16.1468 18.182 18.1819
                16.1469 18.1819 13.6365C18.1819 11.1261 16.1468 9.09105 13.6364 9.09105C11.1261 9.09105 9.09099 11.1261
                9.09099 13.6365C9.09099 16.1469 11.1261 18.182 13.6364 18.182Z"/>
            </svg>
            <p>Поменять <br> аватар</p>
        </div>
        <h1 class="${s.userName}">{{name}}</h1>
        <form action="/" class="${s.form}">
            <div class="${s.list}">{{{children}}}</div>          
            {{#if btn}}
              {{{button}}}
            {{else}}
              <div class="${s.buttons}">
                <a href="/">Изменить пароль</a>
                <a href="/">Изменить данные</a>
              </div>
            {{/if}}
        </form>
      </div>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
