import Handlebars from "handlebars";
import Block from "../../core/Block";
import {TextField} from "../";

export class ProfileData extends Block {

  init() {
    this.children.inputEmail = new TextField({
      type: "email",
      value: "pochta@yandex.ru",
      placeholder: "Новая почта",
      name: "email",
      variant: true
    });
    this.children.inputLogin = new TextField({
      type: "text",
      value: "ivanivanov",
      placeholder: "Новый логин",
      name: "login",
      variant: true
    });
    this.children.inputFirstName = new TextField({
      type: "text",
      value: "Иван",
      placeholder: "Новое имя",
      name: "first_name",
      variant: true
    });
    this.children.inputSecondName = new TextField({
      type: "text",
      value: "Иванов",
      placeholder: "Новая фамилия",
      name: "second_name",
      variant: true
    });
    this.children.inputDisplayName = new TextField({
      type: "text",
      value: "Иван",
      placeholder: "Новое имя в чате",
      name: "display_name",
      variant: true
    });
    this.children.inputPhone = new TextField({
      type: "phone",
      value: "+7 (909) 967 30 30",
      placeholder: "Новый телефон",
      name: "phone",
      variant: true
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
    </ul>   
`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
