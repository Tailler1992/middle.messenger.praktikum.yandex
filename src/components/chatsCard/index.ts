import Handlebars from "handlebars";
import Block from "../../core/Block";
import s from "./chatsCard.module.pcss";

interface ChatsCardProps {
  name: string;
  dateMes: string;
  message: string;
  mark?: string;
  selected?: boolean;
}

export class ChatsCard extends Block {
  constructor(props: ChatsCardProps) {
    super(props);
  }
  render() {
    const className = this.props.selected ? `${s.chatsCard} ${s.chatsCardSelected}` : s.chatsCard;

    const template = `
      <li class="${className}">
          <div class="${s.container}">
              <div>
                  <div class="${s.img}"></div>
              </div>
              <div class="${s.contentBlock}">
                  <div class="${s.info}">
                      <div class="${s.userName}">{{name}}</div>
                      <div class="${s.date}">{{dateMes}}</div>
                  </div>
                  <div class="${s.preview}">
                      <div class="${s.message}">{{message}}</div>
                      {{#if mark}}
                          <div class="${s.mark}">{{mark}}</div>
                      {{/if}}
                  </div>
              </div>
          </div>
      </li>    
`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
