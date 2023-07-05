import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import {withStore} from "../../core/withStore";
import {Button, SearchUser} from "../";
import s from "./popupDeleteUser.module.pcss";

interface PopupDeleteUserBaseProps {
}

class PopupDeleteUserBase extends Block {
  constructor(props: PopupDeleteUserBaseProps) {
    super(props);
  }

  init() {
    this.children.buttonClose = new Button({
      text: "Закрыть",
      name: "close",
      type: "button",
      className: s.btnClose,
      events: {
        click: (evt) => {
          evt.preventDefault();
          StoreApp.dispatch({popups: {deleteUsers: false}});
        },
      },
    });
  }

  protected componentDidUpdate(_oldProps: any, _newProps: any): boolean {
    this.children.chatUsersList = _newProps.chatUsers.map((data: unknown) => {
      return new SearchUser({
        ...data as object,
        btnName: "Удалить",
      });
    });

    return true;
  }

  render() {
    const template = ` 
      <div class="${s.base} {{#if popups.deleteUsers}} ${s.visible} {{/if}}" id="modal-backdrop" >
        <div class="${s.card}">
          <form>
            <h3>Удалить участников</h3>
            {{#if chatUsersList}}
              <ul class="${s.list}">                  
                {{#each chatUsersList}}
                  {{{this}}}
                {{/each}}
              </ul>
            {{else}}
              <p  class="${s.info}">Нет пользователей для удаления</p>
            {{/if}}    
          </form>
          {{{buttonClose}}}
        </div>
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const PopupDeleteUser = withStore(PopupDeleteUserBase);
