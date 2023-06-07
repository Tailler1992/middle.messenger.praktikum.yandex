import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import s from "./navbar.module.pcss";
import {icon, icon2, icon3, icon4, icon5, icon6, icon7} from "./icons";

export class NavBar extends Block {
  render() {
    const template = `
      <nav class="${s.navbar}">
          <ul class="${s.list}">
              <li class="${s.listItem}">
                  <a href="#">${icon}</a>
              </li>
              <li class="${s.listItem} ${s.listItemActive}">
                  <a href="#">${icon2}</a>
              </li>
              <li class="${s.listItem}">
                  <a href="#">${icon3}</a>
              </li>
              <li class="${s.listItem}">
                  <a href="#">${icon4}</a>
              </li>
              <li class="${s.listItem}">
                  <a href="#">${icon5}</a>
              </li>
              <li class="${s.listItem}">
                  <a href="#">${icon6}</a>
              </li>
              <li class="${s.listItem} ${s.listItemDown}">
                  <a href="#">${icon7}</a>
              </li>
          </ul>
      </nav>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
