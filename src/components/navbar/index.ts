import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Link} from "../link";
import s from "./navbar.module.pcss";
import {iconChats, iconProfile, iconLogout} from "./icons";

export class NavBar extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.linkChats = new Link({
      label: iconChats,
      href: "/chat",
    });
    this.children.linkProfile = new Link({
      label: iconProfile,
      href: "/profile",
    });
    this.children.linkLogout = new Link({
      label: iconLogout,
    });
  }

  render() {
    const template = `
      <nav class="${s.navbar}">
        <ul class="${s.list}">
          <li class="${s.listItem}">
            {{{ linkChats }}}
          </li>
          <li class="${s.listItem}">
            {{{ linkProfile }}}
          </li>
          <li class="${s.listItem} ${s.listItemDown}">
            {{{ linkLogout }}}
          </li>
        </ul>
      </nav>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
