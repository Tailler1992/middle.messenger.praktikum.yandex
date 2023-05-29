import Handlebars from "handlebars";
import {CardContainer, LoginCard, NavBar, ProfileBlock, ProfileData} from "../../components";
import {PopupAddFile} from "../../components/popupAddFile";
import Block from "../../core/Block";
import s from "./profileNewAvatar.module.pcss";

export class ProfileNewAvatar extends Block {
  init() {
    this.children.navbar = new NavBar();
    this.children.profileBlock = new ProfileBlock({
      name: "Crown Jackson",
      children: new ProfileData(),
    });
    this.children.content = new CardContainer({
      content: new PopupAddFile(),
    });
  }

  render() {
    const template = `
    <main class="${s.container}">
        {{{navbar}}}
        {{{profileBlock}}}
        <div class="${s.popup}">
          {{{content}}}
        </div>
    </main>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
