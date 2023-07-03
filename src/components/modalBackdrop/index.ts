import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import s from "./modalBackdrop.module.pcss";

interface ModalBackdropProps {
  content?: any;
  events?: {
    click: (evt: Event) => void
  };
}

export class ModalBackdrop extends Block {
  constructor(props: ModalBackdropProps) {
    super({
      ...props,
      events: {
        click: (evt: any) => {
          if (evt.target.id === "modal-backdrop") {
            StoreApp.dispatch({popups: {}});
          }
        },
      },
    });
  }

  render() {
    const template = `
      <div id="modal-backdrop" class="${s.base}">    
        {{{ content }}}
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
