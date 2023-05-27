import Handlebars from "handlebars";
import Block from "../../core/Block";
import {Button, TextField} from "../";
import s from "./registrationCard.module.pcss";

export class RegistrationCard extends Block {
  init() {
    this.children.inputEmail =
        new TextField({type: "email", value: "pochta@yandex.ru", name: "email", placeholder: "Почта"});
    this.children.inputLogin =
        new TextField({type: "text", value: "ivanivanov", name: "login", placeholder: "Логин"});
    this.children.inputFirstName =
        new TextField({type: "text", value: "Иван", name: "first_name", placeholder: "Имя"});
    this.children.inputSecondName =
        new TextField({type: "text", value: "Иванов", name: "second_name", placeholder: "Фамилия"});
    this.children.inputPhone =
        new TextField({type: "text", value: "+7 (909) 967 30 30", name: "phone", placeholder: "Телефон"});
    this.children.inputPassword =
        new TextField({type: "password", value: "пароль123", name: "password", placeholder: "Пароль"});
    this.children.inputRepeatPassword =
        new TextField({type: "password", value: "пароль123", name: "password", placeholder: "Пароль (ещё раз)"});

    this.children.button = new Button({
      text: "Зарегистрироваться",
      className: `${s.button}`,
      name: "register",
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
          {{{button}}}
          <a class="${s.link}" href="/">Нет аккаунта?</a>
      </form>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
