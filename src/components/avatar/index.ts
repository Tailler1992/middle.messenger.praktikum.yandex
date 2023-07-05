import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {TextField} from "../textField";
import {changeUserAvatar} from "../../services/Users";
import {withStore} from "../../core/withStore";
import s from "./avatar.module.pcss";

interface AvatarBaseProps {
  isChangingImg?: boolean;
}

class AvatarBase extends Block {
  constructor(props: AvatarBaseProps) {
    super(props);
  }

  init() {
    this.children.inputAvatar = new TextField({
      type: "file",
      name: "avatar",
      events: {
        change: (evt) => this.changeImg(evt),
      },
    });
  }

  changeImg(evt: Event) {
    const target = evt.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const formData = new FormData();

      formData.append("avatar", file);

      changeUserAvatar(formData).finally(() => {
        target.value = "";
      });
    }
  }

  render() {
    const template = `      
      <div class="${s.avatar}">
        {{#if user.avatar}}            
          <img class="${s.img}" src="https://ya-praktikum.tech/api/v2/resources{{user.avatar}}" alt="avatar" />
        {{else}}
          <svg width="50" height="50" viewBox="0 0 50 50" fill="#D6E4E5" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M46 2H4C2.89543 2 2 2.89543 2 4V31.6998L18.6547
              27.8137C19.5486 27.6051 20.4635 27.4998 21.3814 27.4998H28.6185C29.5365 27.4998 30.4514 27.6051 31.3453
              27.8137L48 31.6998V4C48 2.89543 47.1046 2 46 2ZM4 0C1.79086 0 0 1.79086 0 4V46C0 48.2091 1.79086 50 4
              50H46C48.2091 50 50 48.2091 50 46V4C50 1.79086 48.2091 0 46 0H4ZM13.6364 18.182C16.1468 18.182 18.1819
              16.1469 18.1819 13.6365C18.1819 11.1261 16.1468 9.09105 13.6364 9.09105C11.1261 9.09105 9.09099 11.1261
              9.09099 13.6365C9.09099 16.1469 11.1261 18.182 13.6364 18.182Z"/>
          </svg>          
        {{/if}}
        {{#if isChangingImg}} 
          <label class="${s.label}">
            {{{ inputAvatar }}}
            <span>Поменять <br> аватар</span>
          </label>
        {{/if}}
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const Avatar = withStore(AvatarBase);
