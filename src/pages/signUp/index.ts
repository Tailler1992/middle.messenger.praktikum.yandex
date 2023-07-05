import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Button, TextField, Link} from "../../components";
import {isValidateInput, validateAndGetData} from "../../core/utils/validateForm";
import {signUp} from "../../services/Auth";
import s from "./signUp.module.pcss";

export class SignUp extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.inputEmail = new TextField({
      type: "email",
      name: "email",
      placeholder: "Почта",
      events: {
        blur: () => isValidateInput(this.children.inputEmail.element),
      },
    });
    this.children.inputLogin = new TextField({
      type: "text",
      name: "login",
      placeholder: "Логин",
      events: {
        blur: () => isValidateInput(this.children.inputLogin.element),
      },
    });
    this.children.inputFirstName = new TextField({
      type: "text",
      name: "first_name",
      placeholder: "Имя",
      events: {
        blur: () => isValidateInput(this.children.inputFirstName.element),
      },
    });
    this.children.inputSecondName = new TextField({
      type: "text",
      name: "second_name",
      placeholder: "Фамилия",
      events: {
        blur: () => isValidateInput(this.children.inputSecondName.element),
      },
    });
    this.children.inputPhone = new TextField({
      type: "text",
      name: "phone",
      placeholder: "Телефон",
      events: {
        blur: () => isValidateInput(this.children.inputPhone.element),
      },
    });
    this.children.inputPassword = new TextField({
      type: "password",
      name: "newPassword",
      placeholder: "Пароль",
      events: {
        blur: () => isValidateInput(this.children.inputPassword.element),
      },
    });
    this.children.inputRepeatPassword = new TextField({
      type: "password",
      name: "repeatNewPassword",
      placeholder: "Пароль (ещё раз)",
      events: {
        blur: () => isValidateInput(this.children.inputRepeatPassword.element),
      },
    });
    this.children.button = new Button({
      text: "Зарегистрироваться",
      className: `${s.button}`,
      name: "register",
      type: "submit",
      events: {
        click: (evt) => this.onSubmit(evt),
      },
    });
    this.children.link = new Link({
      label: "Войти",
      className: s.link,
      href: "/",
    });
  }

  onSubmit(evt: PointerEvent) {
    evt.preventDefault();

    const data = validateAndGetData();

    if (data) {
      const newData = {
        first_name: data.first_name,
        second_name: data.second_name,
        login: data.login,
        email: data.email,
        password: data.newPassword,
        phone: data.phone,
      };

      signUp(newData).then();
    }
  }

  render() {
    const template = `
      <main class="${s.container}">
        <div class="${s.card}">        
          <form class=${s.form} id="password-form">
            <h1 class=${s.title}>Регистрация</h1>
            <div class=${s.textFields}>
              {{{ inputEmail }}}
              {{{ inputLogin }}}
              {{{ inputFirstName }}}
              {{{ inputSecondName }}}
              {{{ inputPhone }}}
              {{{ inputPassword }}}
              {{{ inputRepeatPassword }}}
            </div>
            <div class=${s.errorBlock} id="errorBlock"></div>  
            {{{ button }}}
            {{{ link }}}
          </form>
        </div>
      </main>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
