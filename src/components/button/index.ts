import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import s from "./button.module.pcss";

interface ButtonProps {
  text?: string;
  type: string;
  name: string;
  className?: string;
  stylePopup?: boolean;
  events?: {
    click: (evt: PointerEvent) => void;
  };
  icon?: string;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const template = `
      {{#if stylePopup}}
        <button class="${s.green} {{ className }}" type="{{ type }}" name={{ name }}>
          <div class="${s.icon}">{{{ icon }}}</div> <p>{{ text }}</p>
        </button>
      {{else}}
        <button class="${s.orange} {{ className }}" type="{{ type }}" name={{ name }}>
          {{ text }} {{{ icon }}}
        </button>      
      {{/if}}`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
