import Handlebars from "handlebars";
import {NavBar, ProfileBlock, ProfileData} from "../../components";
import Block from "../../core/Block";
import s from "./profile.module.pcss";

export class Profile extends Block {
  init() {
    this.children.navbar = new NavBar();
    this.children.profileBlock = new ProfileBlock({
      name: "Crown Jackson",
      children: new ProfileData()
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
