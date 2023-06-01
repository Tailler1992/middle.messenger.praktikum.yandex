import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Button, TextField} from "../";
import {validate, validateForm} from "../../core/utils/validateForm";
import sInput from "../textField/textField.module.pcss";
import s from "./registrationCard.module.pcss";

export class RegistrationCard extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.inputEmail =
        new TextField({
          type: "email",
          value: "",
          name: "email",
          placeholder: "Почта",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputEmail);
            },
          },
        });
    this.children.inputLogin =
        new TextField({
          type: "text",
          value: "",
          name: "login",
          placeholder: "Логин",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputLogin);
            },
          },
        });
    this.children.inputFirstName =
        new TextField({
          type: "text",
          value: "",
          name: "first_name",
          placeholder: "Имя",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputFirstName);
            },
          },
        });
    this.children.inputSecondName =
        new TextField({
          type: "text",
          value: "",
          name: "second_name",
          placeholder: "Фамилия",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputSecondName);
            },
          },
        });
    this.children.inputPhone =
        new TextField({
          type: "text",
          value: "",
          name: "phone",
          placeholder: "Телефон",
          events: {
            focus: (evt) => {
              (evt.target as HTMLElement).classList.remove(sInput.error);
            },
            blur: (evt) => {
              validate(evt, this.children.inputPhone);
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
    this.children.inputRepeatPassword =
        new TextField({
          type: "password",
          value: "",
          name: "repeat_password",
          placeholder: "Пароль (ещё раз)",
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
      text: "Зарегистрироваться",
      className: `${s.button}`,
      name: "register",
      type: "submit",
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          validateForm(evt, `.${s.form}`);
        },
      },
    });
  }

  render() {
    const template = `
      <form class=${s.form} action="">
          <h1 class=${s.title}>Регистрация</h1>
          <div class=${s.textFields}>
              {{{inputEmail}}}
              {{{inputLogin}}}
              {{{inputFirstName}}}
              {{{inputSecondName}}}
              {{{inputPhone}}}
              {{{inputPassword}}}
              {{{inputRepeatPassword}}}
          </div>
          <div class=${s.errorBlock} id="errorBlock"></div>  
          {{{button}}}
          <a class="${s.link}" href="/">Нет аккаунта?</a>
      </form>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
