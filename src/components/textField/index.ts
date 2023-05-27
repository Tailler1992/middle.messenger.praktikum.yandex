import Handlebars from "handlebars";
import Block from "../../core/Block";
import s from "./textField.module.pcss";

interface TextFieldProps {
  type: string;
  value: string;
  placeholder?: string;
  name: string;
}

export class TextField extends Block {
  constructor(props: TextFieldProps) {
    super(props);
  }

  render() {
    const template = `
      <input 
        class="${s.textField} {{#if variant}}text-field-variant{{/if}}" 
        type="{{type}}" 
        value="{{value}}"
        placeholder="{{placeholder}}" 
        name={{name}} 
        {{atr}}>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
