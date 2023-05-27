import Handlebars from "handlebars";
import Block from "../../core/Block";
import {Button, TextField} from "../";
import s from "./loginCard.module.pcss";

export class LoginCard extends Block {
  init() {
    this.children.inputLogin =
        new TextField({type: "text", value: "ivanivanov", name: "login", placeholder: "Логин или email"});
    this.children.inputPassword =
        new TextField({type: "password", value: "пароль123", name: "password", placeholder: "Пароль"});

    this.children.button = new Button({
      text: "Авторизоваться",
      className: `${s.button}`,
      name: "enter",
      type: "submit",
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          console.log("clicked");
        },
      },
    });
  }

  render() {
    const template = `
      <form class=${s.form} action="">
          <h1 class=${s.title}>Вход</h1>
          <div class=${s.textFields}>
              {{{inputLogin}}}
              {{{inputPassword}}}
          </div>
          {{{button}}}
          <a class="${s.link}" href="/">Нет аккаунта?</a>
      </form>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}

