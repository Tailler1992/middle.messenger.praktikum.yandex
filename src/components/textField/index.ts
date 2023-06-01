import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import s from "./textField.module.pcss";

interface TextFieldProps {
  type: string;
  value: string;
  placeholder?: string;
  name: string;
  variant?: boolean;
  events?: {
    focus?: (evt: Event) => void;
    blur?: (evt: Event) => void;
  };
  className?: string;
  disabled?: boolean;
}

export class TextField extends Block {
  constructor(props: TextFieldProps) {
    super(props);
  }

  render() {
    const className = this.props.variant ? `${s.textField} ${s.variant}` : s.textField;
    const disabled = this.props.disabled ? "disabled" : "";
    const template = `
      <input 
        class="${className}" 
        type="{{type}}" 
        value="{{value}}"
        placeholder="{{placeholder}}" 
        name={{name}} 
        autocomplete="off"
        ${disabled}>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
