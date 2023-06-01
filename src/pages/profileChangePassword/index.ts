import Handlebars from "handlebars";
import {NavBar, ProfileBlock, ProfilePass} from "../../components";
import {Block} from "../../core/Block";
import s from "./profileChangePassword.module.pcss";

export class profileChangePassword extends Block {
  constructor() {
    super();
  }

  init() {
    this.children.navbar = new NavBar();
    this.children.profileBlock = new ProfileBlock({
      children: new ProfilePass(),
      btn: true,
    });
  }

  render() {
    const template = `
    <main class="${s.container}">
        {{{navbar}}}
        {{{profileBlock}}}
    </main>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
