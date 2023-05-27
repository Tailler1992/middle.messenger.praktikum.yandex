import Handlebars from "handlebars";
import Block from "../../core/Block";
import s from "./cardContainer.module.pcss";

interface CardContainerProps {
  content?: any;
}

export class CardContainer extends Block {
  constructor(props: CardContainerProps) {
    super(props);
  }

  render() {
    const template = `
      <div class="${s.card}">
          {{{content}}}
      </div>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
