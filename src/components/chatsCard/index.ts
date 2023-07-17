import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import s from "./chatsCard.module.pcss";

interface ChatsCardProps {
  events: {
    click: () => void;
  };
}

export class ChatsCard extends Block {
  constructor(props: ChatsCardProps) {
    super(props);
  }

  render() {
    const selectedChat =  StoreApp.getState().selectedChat.id;
    const className = selectedChat === this.props.id ? `${s.chatsCard} ${s.chatsCardSelected}` : s.chatsCard;

    const template = `
      <li class="${className}">
        <div class="${s.container}">
          <div>
            <div class="${s.img}">
              {{#if avatar}}
                <img class="${s.imgLogo}" 
                  src="https://ya-praktikum.tech/api/v2/resources{{avatar}}" 
                  alt="chat-avatar"/>
              {{/if}}
            </div>
          </div>
          <div class="${s.contentBlock}">
            <div class="${s.info}">
              <div class="${s.userName}">{{ title }}</div>
              <div class="${s.date}">{{ last_message.time }}</div>
            </div>
            <div class="${s.preview}">
              <div class="${s.message}">{{ last_message.content }}</div>
                {{#if unread_count}}
                  <div class="${s.mark}">{{ unread_count }}</div>
                {{/if}}
            </div>
          </div>
        </div>
      </li>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
