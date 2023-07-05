import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import {addUser, deleteUser} from "../../services/Chats";
import {Button} from "../";
import s from "./searchUser.module.pcss";

export class SearchUser extends Block {
  init() {
    this.children.button = new Button({
      type: "submit",
      text: this.props.btnName,
      name: "action",
      events: {
        click: (evt) => {
          evt.preventDefault();

          const data = {
            users: [this.props!.id!],
            chatId: StoreApp.getState().selectedChat!.id!,
          };

          if (this.props.btnName === "Добавить") {
            addUser(data).then();
          } else {
            deleteUser(data).then();
          }
        },
      },
    });
  }

  render() {
    const template = `
      <li class="${s.item}">
        <span>{{login}}</span>     
        {{{button}}}
      </li>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
