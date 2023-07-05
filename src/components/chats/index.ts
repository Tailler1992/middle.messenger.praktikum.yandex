import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {TextField, ChatsCard, Button} from "../";
import {skeleton} from "./skeleton";
import {StoreApp} from "../../core/Store";
import {withStore} from "../../core/withStore";
import {getChats, getChatUsers} from "../../services/Chats";
import s from "./chats.module.pcss";

interface ChatsBaseProps {
}

class ChatsBase extends Block {
  constructor(props: ChatsBaseProps) {
    super(props);
  }

  init() {
    this.children.inputSearch = new TextField({
      type: "text",
      name: "search",
      placeholder: "Поиск",
    });
    this.children.buttonNewChat = new Button({
      type: "button",
      name: "new_chat",
      text: "+",
      events: {
        click: () => StoreApp.dispatch({popups: {newChat: true}}),
      },
    });

    getChats().finally(() => {
      this.props.isLoaded = true;
    });
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.chatList = newProps.chatList.map((data: Record<string, any>) => {
      return new ChatsCard({
        ...data,
        events: {
          click: () => {
            getChatUsers(data.id).then();

            StoreApp.dispatch({
              selectedChat: {
                title: data.title,
                id: data.id,
              },
            });
          },
        },
      });
    });

    return true;
  }

  render() {
    const template = `
      <div class="${s.chats}">
        <div class="${s.user}">
          <div class="${s.avatar}">  
            {{#if user.avatar}} 
              <img class="${s.imgAva}" 
                   src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}" 
                   alt="user-avatar"/>
            {{/if}}
          </div>
          <h1 class="${s.fullName}">{{ user.first_name }} {{ user.second_name }}</h1>
        </div>        
        <div class="${s.search}">{{{ inputSearch }}}</div>        
        <div class="${s.newChat}">
          <h2 class="${s.title}">Чаты</h2>
          {{{ buttonNewChat }}}
        </div>         
        <div class="${s.cards}">
          {{#if isLoaded}}
            <ul>
              {{#each chatList}}
                {{{this}}}
              {{/each}}
            </ul>
          {{else}}
            ${skeleton}${skeleton}
            ${skeleton}${skeleton}
          {{/if}}
        </div>
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const Chats = withStore(ChatsBase);
