import Handlebars from "handlebars";
import {NavBar, Chats, ChatsContent} from "../../components";
import Block from "../../core/Block";
import s from "./chat.module.pcss";

export class Chat extends Block {
  init() {
    this.children.navbar = new NavBar();
    this.children.chats = new Chats();
    this.children.content = new ChatsContent();
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
