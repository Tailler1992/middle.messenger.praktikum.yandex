import Handlebars from "handlebars";
import {NavBar, ProfileBlock, ProfileData} from "../../components";
import Block from "../../core/Block";
import s from "./profileChange.module.pcss";

export class ProfileChangeData extends Block {
  init() {
    this.children.navbar = new NavBar();
    this.children.profileBlock = new ProfileBlock({
      children: new ProfileData(),
      btn: true
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
