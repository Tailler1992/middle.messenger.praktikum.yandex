import Handlebars from "handlebars";
import {CardContainer, LoginCard} from "../../components";
import Block from "../../core/Block";
import s from "./signIn.module.pcss";

export class SignIn extends Block {
  init() {
    this.children.content = new CardContainer({
      content: new LoginCard(),
    });
  }

  render() {
    const template = `
    <main class="${s.container}">
        {{{content}}}
    </main>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
