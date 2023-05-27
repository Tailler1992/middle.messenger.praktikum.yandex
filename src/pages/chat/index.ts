import Handlebars from "handlebars";
import {CardContainer, LoginCard, NavBar, Chats} from "../../components";
import Block from "../../core/Block";
import s from "./chat.module.pcss";

export class Chat extends Block {
  init() {
    this.children.navbar = new NavBar();
    this.children.chats = new Chats();
  }

  render() {
    const template = `
    <main class="${s.container}">
        {{{navbar}}}
        {{{chats}}}
        {{{content}}}
    </main>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
