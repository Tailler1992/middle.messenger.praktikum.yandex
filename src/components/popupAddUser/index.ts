import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {StoreApp} from "../../core/Store";
import {withStore} from "../../core/withStore";
import {searchUser} from "../../services/Users";
import {Button, SearchUser, TextField} from "../";
import s from "./popupAddNewUser.module.pcss";

interface PopupAddUserBaseProps {
}

class PopupAddUserBase extends Block {
  constructor(props: PopupAddUserBaseProps) {
    super(props);
  }

  init() {
    this.children.input = new TextField({
      type: "text",
      name: "searchUser",
      placeholder: "Логин",
    });
    this.children.button = new Button({
      text: "Поиск",
      type: "submit",
      name: "send",
      className: s.button,
      events: {
        click: (evt) => {
          evt.preventDefault();

          const input = this.children.input;
          const value = input.element.value;

          if (value.length > 1) {
            searchUser({login: value}).finally(() => {
              const users = StoreApp.getState().foundUsers;

              if (users.length > 0) {
                this.setProps({isSearch: true, error: false});
              } else {
                this.setProps({error: true, isSearch: false});
              }
            });
          }
        },
      },
    });
    this.children.buttonClose = new Button({
      text: "Закрыть",
      type: "button",
      name: "close",
      className: s.btnClose,
      events: {
        click: (evt) => {
          evt.preventDefault();

          this.setProps({isSearch: false});
          const input = this.children.input;
          input.element.value = "";

          StoreApp.dispatch({popups: {addUsers: false}});
        },
      },
    });
  }

  protected componentDidUpdate(_: any, newProps: any): boolean {
    this.children.searchList = newProps.foundUsers.map((data: any) => {
      return new SearchUser({
        ...data,
        btnName: "Добавить",
      });
    });

    return true;
  }

  render() {
    const template = ` 
      <div class="${s.base} {{#if popups.addUsers}}${s.visible} {{/if}}" id="modal-backdrop">
        <div class="${s.card}">
          <form>        
            <h3>Поиск</h3>
            <div class="${s.line}">
              {{{ input }}}
              {{{ button }}}
            </div>            
            {{#if isSearch}}
              <p class="${s.searchTitle}">Найдено:</p>
              <ul class="${s.list}">
              {{#each searchList}}
                {{{this}}}
              {{/each}}
              </ul>
            {{/if}}
            {{#if error}}    
              <p class="${s.searchTitle}">Поиск не дал результатов</p>
           {{/if}}
          </form>
           {{{buttonClose}}}
        </div>
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const PopupAddUser = withStore(PopupAddUserBase);
