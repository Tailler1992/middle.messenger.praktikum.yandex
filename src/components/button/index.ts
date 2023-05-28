import Handlebars from "handlebars";
import Block from "../../core/Block";
import s from "./button.module.pcss";

interface ButtonProps {
  text: string;
  type: string;
  name: string;
  className?: string;
  events?: {
    click: (evt: PointerEvent) => void;
  };
  icon?: any;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const template = `
      <button class="${s.button} {{className}}" type="{{type}}" name={{name}}>
          {{text}}
          {{{icon}}}
      </button>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
