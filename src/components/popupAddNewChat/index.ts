import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import {withStore} from "../../core/withStore";
import {createChats} from "../../services/Chats";
import {Button} from "../button";
import {TextField} from "../textField";
import s from "./popupAddNewChat.module.pcss";

interface PopupAddNewChatBaseProps {
}

export class PopupAddNewChatBase extends Block {
  constructor(props: PopupAddNewChatBaseProps) {
    super(props);
  }

  init() {
    this.children.input = new TextField({
      type: "text",
      name: "",
      placeholder: "Название группы",
    });

    this.children.button = new Button({
      text: "Далее",
      type: "submit",
      name: "send",
      events: {
        click: (evt) => {
          evt.preventDefault();
          const input = this.children.input;
          const value = input.element.value;

          if (value.length > 0) {
            createChats({title: value}).finally(() => {
              input.element.value = "";
              StoreApp.dispatch({popups: {}});
            });
          }
        },
      },
    });
  }

  render() {
    const template = ` 
        <div class="${s.card}">
          <form class="${s.form}">
            <h3>Создать группу</h3>
            {{{ input }}}
            {{{ button }}}
          </form>
        </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const PopupAddNewChat = withStore(PopupAddNewChatBase);
