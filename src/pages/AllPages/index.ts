import Handlebars from "handlebars";
import {CardContainer, LoginCard} from "../../components";
import Block from "../../core/Block";
import s from "./allPages.module.pcss"

type link = {
  link: string;
  label: string;
};
interface AllPagesProps {
  pages: link[];
}
export class AllPages extends Block {
  constructor(props: AllPagesProps) {
    super(props);
  }

  render() {
    const template = `
      <nav class="${s.nav}">
          <ol class="${s.list}">
            {{#each pages}}
              <li><a href="{{this.link}}">{{this.label}}</a></li>
            {{/each}}
          </ol>
      </nav>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
