import Handlebars from "handlebars";
import {CardContainer, RegistrationCard} from "../../components";
import {Block} from "../../core/Block";
import s from "./signUp.module.pcss";

export class SignUp extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.content = new CardContainer({
      content: new RegistrationCard(),
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
