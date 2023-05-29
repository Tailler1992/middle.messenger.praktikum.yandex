import Handlebars from "handlebars";
import Block from "../../core/Block";
import {TextField} from "../";

export class ProfilePass extends Block {

  init() {
    this.children.inputOldPassword = new TextField({
      type: "password",
      value: "1234567",
      placeholder: "Старый пароль",
      name: "oldPassword",
      variant: true
    });
    this.children.inputNewPassword = new TextField({
      type: "password",
      value: "1234567",
      placeholder: "Новый пароль",
      name: "newPassword",
      variant: true
    });
    this.children.inputRepeatNewPassword = new TextField({
      type: "password",
      value: "1234567",
      placeholder: "Новый пароль (ещё раз)",
      name: "newPassword",
      variant: true
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
