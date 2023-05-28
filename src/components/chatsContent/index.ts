import Handlebars from "handlebars";
import Block from "../../core/Block";
import {ContentHeader, ContentFooter, ContentMessages} from "../";
import s from "./chatsContent.module.pcss";

export class ChatsContent extends Block {

  init() {
    this.children.contentHeader = new ContentHeader({contactName: "Тет-а-теты"});
    this.children.contentFooter = new ContentFooter();
    this.children.contentMessages = new ContentMessages();
  }

  render() {

    const template = `
      <div class="${s.content}">
          <div class="${s.wrapper}">
              {{{contentHeader}}}
              {{{contentMessages}}}
              {{{contentFooter}}}
          </div>
      </div>   
`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
