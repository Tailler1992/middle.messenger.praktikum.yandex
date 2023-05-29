import Handlebars from "handlebars";
import Block from "../../core/Block";
import {Button, TextField} from "../";
import s from "./contentFooter.module.pcss";
import {arrowIco} from './arrow';

export class ContentFooter extends Block {
  init() {
    this.children.inputMessage = new TextField({
      name: "message",
      placeholder: "Сообщение...",
      value: "",
      type: "text"
    });
    this.children.button = new Button({
      type: "submit",
      name: "send",
      className: `${s.buttonSend}`,
      events: {
        click: (evt: PointerEvent) => {
          evt.preventDefault();
          console.log("clicked");
        },
      },
      text: "Отправить",
      icon: arrowIco
    })
  }

  render() {

    const template = `
      <form action="/" class="${s.contentFooter}">
          <div class="${s.buttonLeft}">
              <button type="button" class="${s.buttonClip}">
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" stroke="#497174"
                       xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 5.5V12.6716C5 13.202 5.21071 13.7107 5.58579 14.0858V14.0858C6.36684 14.8668 7.63316
                      14.8668 8.41421 14.0858V14.0858C8.78929 13.7107 9 13.202 9 12.6716V5.31507C9 4.16162 8.50208 3.06432
                      7.63402 2.30477V2.30477C6.12591 0.985175 3.87409 0.985175 2.36598 2.30477V2.30477C1.49792 3.06432 1
                      4.16162 1 5.31507V12.9451C1 14.5667 1.7086 16.1074 2.93981 17.1627V17.1627C3.9466 18.0257 5.22887 18.5
                      6.55489 18.5H9" stroke-width="2" stroke-linecap="round"/>
                  </svg>
              </button>              
          </div>
          {{{inputMessage}}}
          {{{button}}}
      </form>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
