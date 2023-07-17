import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Button} from "../button";
import {PopupChatManagement} from "../popupChatManagement";
import s from "./contentHeader.module.pcss";
import {pointsIco} from "./points";

interface ContentHeaderProps {
  title?: string;
  usersInChat?: string;
  isVisiblePopup?: boolean;
}

export class ContentHeader extends Block {
  constructor(props: ContentHeaderProps) {
    super(props);
  }

  protected init() {
    this.children.button = new Button({
      type: "button",
      className: s.toggleButton,
      name: "toggle-popup ",
      icon: pointsIco,
      events: {
        click: () => {
          this.props.isVisiblePopup = !this.props.isVisiblePopup;
        },
      },
    });
    this.children.popup = new PopupChatManagement({open: false});
  }

  render() {
    const template = `
      <div class="${s.header}">
        <div>
          <div class="${s.name}">
            {{{ title }}}          
          </div>
          <p class="${s.inChat}">Участники:<span> {{{usersInChat}}} </span> </p>
        </div>
        <div class="${s.right}">
          {{{ button }}} 
          {{#if isVisiblePopup}}
            {{{ popup }}}
          {{/if}}
        </div>
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
