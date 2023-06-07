import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {TextField} from "../";
import {validate} from "../../core/utils/validateForm";
import sInput from "../textField/textField.module.pcss";

interface ProfileDataProps {
  disabled?: boolean;
}

export class ProfileData extends Block {
  constructor(props: ProfileDataProps) {
    super(props);
  }

  init() {
    this.children.inputEmail = new TextField({
      type: "email",
      value: "pochta@yandex.ru",
      placeholder: "Новая почта",
      name: "email",
      variant: true,
      disabled: this.props.disabled,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputEmail);
        },
      },
    });
    this.children.inputLogin = new TextField({
      type: "text",
      value: "ivanivanov",
      placeholder: "Новый логин",
      name: "login",
      variant: true,
      disabled: this.props.disabled,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputLogin);
        },
      },
    });
    this.children.inputFirstName = new TextField({
      type: "text",
      value: "Иван",
      placeholder: "Новое имя",
      name: "first_name",
      variant: true,
      disabled: this.props.disabled,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputFirstName);
        },
      },
    });
    this.children.inputSecondName = new TextField({
      type: "text",
      value: "Иванов",
      placeholder: "Новая фамилия",
      name: "second_name",
      variant: true,
      disabled: this.props.disabled,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputSecondName);
        },
      },
    });
    this.children.inputDisplayName = new TextField({
      type: "text",
      value: "Иван",
      placeholder: "Новое имя в чате",
      name: "display_name",
      variant: true,
      disabled: this.props.disabled,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputDisplayName);
        },
      },
    });
    this.children.inputPhone = new TextField({
      type: "phone",
      value: "+79099673030",
      placeholder: "Новый телефон",
      name: "phone",
      variant: true,
      disabled: this.props.disabled,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputPhone);
        },
      },
    });
  }

  render() {
    const template = `
    <ul>     
        <li><p>Почта</p>{{{inputEmail}}}</li>
        <li><p>Логин</p>{{{inputLogin}}}</li>
        <li><p>Имя</p>{{{inputFirstName}}}</li>
        <li><p>Фамилия</p>{{{inputSecondName}}}</li>
        <li><p>Имя в чате</p>{{{inputDisplayName}}}</li>
        <li><p>Телефон</p>{{{inputPhone}}}</li>   
    </ul>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
