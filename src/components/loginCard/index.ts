import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Button, TextField} from "../";
import {validate, validateForm} from "../../core/utils/validateForm";
import s from "./loginCard.module.pcss";
import sInput from "../textField/textField.module.pcss";

export class LoginCard extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.inputLogin =
        new TextField({
          type: "text",
          value: "",
          name: "login",
          placeholder: "Логин или email",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputLogin);
            },
          },
        });
    this.children.inputPassword =
        new TextField({
          type: "password",
          value: "",
          name: "password",
          placeholder: "Пароль",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputPassword);
            },
          },
        });
    this.children.button = new Button({
      text: "Авторизоваться",
      className: `${s.button}`,
      name: "enter",
      type: "submit",
      events: {
        click: (evt) => {
          validateForm(evt, `.${s.form}`);
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
          <div class=${s.errorBlock} id="errorBlock"></div>      
          {{{button}}}
          <a class="${s.link}" href="/">Нет аккаунта?</a>
      </form>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
