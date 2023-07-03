import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Button, Link, TextField} from "../../components";
import {isValidateInput, validateAndGetData} from "../../core/utils/validateForm";
import {signIn} from "../../services/Auth";
import s from "./signIn.module.pcss";

export class SignIn extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.inputLogin = new TextField({
      type: "text",
      name: "login",
      placeholder: "Логин",
      events: {
        blur: () => isValidateInput(this.children.inputLogin.element),
      },
    });
    this.children.inputPassword = new TextField({
      type: "password",
      name: "password",
      placeholder: "Пароль",
      events: {
        blur: () => isValidateInput(this.children.inputPassword.element),
      },
    });
    this.children.button = new Button({
      text: "Авторизоваться",
      className: `${s.button}`,
      name: "enter",
      type: "submit",
      events: {
        click: (evt) => this.onSubmit(evt),
      },
    });
    this.children.link = new Link({
      label: "Нет аккаунта?",
      className: s.link,
      href: "/sign-up",
    });
  }

  onSubmit(evt: PointerEvent) {
    evt.preventDefault();

    const data = validateAndGetData();

    if (data) {
      signIn(data).then();
    }
  }

  render() {
    const template = `
      <main class="${s.container}">
        <div class="${s.card}">
          <form class=${s.form} action="">
            <h1 class=${s.title}>Вход</h1>
            <div class=${s.textFields}>
              {{{ inputLogin }}}
              {{{ inputPassword }}}
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
