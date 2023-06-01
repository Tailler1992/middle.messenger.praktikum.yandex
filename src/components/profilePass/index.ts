import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {TextField} from "../";
import {validate} from "../../core/utils/validateForm";
import sInput from "../textField/textField.module.pcss";

export class ProfilePass extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.inputOldPassword = new TextField({
      type: "password",
      value: "1234567",
      placeholder: "Старый пароль",
      name: "old_password",
      variant: true,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputOldPassword);
        },
      },
    });
    this.children.inputNewPassword = new TextField({
      type: "password",
      value: "1234567",
      placeholder: "Новый пароль",
      name: "password",
      variant: true,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputNewPassword);
        },
      },
    });
    this.children.inputRepeatNewPassword = new TextField({
      type: "password",
      value: "1234567",
      placeholder: "Новый пароль (ещё раз)",
      name: "repeat_password",
      variant: true,
      events: {
        focus: (evt) => {
          (evt.target as HTMLElement).classList.remove(sInput.error);
        },
        blur: (evt) => {
          validate(evt, this.children.inputRepeatNewPassword);
        },
      },
    });
  }

  render() {
    const template = `
      <ul>
          <li><p>Старый пароль</p>{{{inputOldPassword}}}</li>
          <li><p>Новый пароль</p>{{{inputNewPassword}}}</li>
          <li><p >Повторите новый пароль</p>{{{inputRepeatNewPassword}}}</li> 
      </ul>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
