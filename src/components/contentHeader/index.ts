import Handlebars from "handlebars";
import Block from "../../core/Block";
import s from "./contentHeader.module.pcss";

interface ContentHeaderProps {
  contactName: string;
}

export class ContentHeader extends Block {
  constructor(props: ContentHeaderProps) {
    super(props);
  }

  render() {
    const template = `
      <div class="${s.header}">
          <div class="${s.name}">
              {{{contactName}}}
          </div>
          <div class="${s.right}">
              <button type="button" class="${s.button}">
                  <svg width="20" height="4" viewBox="0 0 20 4" fill="#497174" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 2C4 3.10449 3.10461 4 2 4C0.895386 4 0 3.10449 0 2C0 0.895508 0.895386 0 2 0C3.10461
                      0 4 0.895508 4 2Z"/>
                      <path d="M12 2C12 3.10449 11.1046 4 10 4C8.89539 4 8 3.10449 8 2C8 0.895508 8.89539 0 10 0C11.1046
                      0 12 0.895508 12 2Z"/>
                      <path d="M18 4C19.1046 4 20 3.10449 20 2C20 0.895508 19.1046 0 18 0C16.8954 0 16 0.895508 16 2C16
                      3.10449 16.8954 4 18 4Z"/>
                  </svg>
              </button>              
          </div>
      </div>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
