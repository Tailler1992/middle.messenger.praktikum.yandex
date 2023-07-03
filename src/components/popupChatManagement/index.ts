import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import {deleteChat} from "../../services/Chats";
import {Button} from "../";
import {iconAddUser, iconDeleteUser} from "./icons";
import s from "./popupChatManagement.module.pcss";

interface PopupChatManagementProps {
}

export class PopupChatManagement extends Block {
  constructor(props: PopupChatManagementProps) {
    super(props);
  }

  protected init() {
    this.children.buttonAddUser = new Button({
      type: "button",
      name: "add_user",
      icon: iconAddUser,
      text: "Добавить пользователя",
      stylePopup: true,
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: {addUsers: true},
          });

          this.props.open = false;
        },
      },
    });
    this.children.buttonDeleteUser = new Button({
      type: "button",
      name: "delete_user",
      icon: iconDeleteUser,
      text: "Удалить пользователя",
      stylePopup: true,
      events: {
        click: () => {
          StoreApp.dispatch({
            popups: {deleteUsers: true},
          });
        },
      },
    });

    this.children.buttonDeleteChat = new Button({
      type: "button",
      name: "delete_chat",
      text: "Удалить чат",
      className: s.button,
      events: {
        click: () => {
          const chatId = StoreApp.getState().selectedChat!.id!;

          deleteChat({chatId}).then();
        },
      },
    });
  }

  render() {
    const template = `
      <div id="popup-chat-manag" class="${s.popup}">
        {{{ buttonAddUser }}}
        {{{ buttonDeleteUser }}}
        {{{ buttonDeleteChat }}}      
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
