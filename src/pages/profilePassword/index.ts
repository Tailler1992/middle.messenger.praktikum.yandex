import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Avatar, Button, NavBar, TextField} from "../../components";
import {isValidateInput, validateAndGetData} from "../../core/utils/validateForm";
import {withStore} from "../../core/withStore";
import {changeUserPassword} from "../../services/Users";
import s from "./profileChangePassword.module.pcss";

interface ProfilePasswordBaseProps {
}

class ProfilePasswordBase extends Block {
  constructor(props: ProfilePasswordBaseProps) {
    super(props);
  }

  init() {
    this.children.navbar = new NavBar();
    this.children.avatar = new Avatar({});
    this.children.inputOldPass = new TextField({
      type: "password",
      placeholder: "Старый пароль",
      name: "oldPassword",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputOldPass.element),
      },
    });
    this.children.inputNewPass = new TextField({
      type: "password",
      placeholder: "Новый пароль",
      name: "newPassword",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputNewPass.element),
      },
    });
    this.children.inputRepeatNewPass = new TextField({
      type: "password",
      placeholder: "Новый пароль (ещё раз)",
      name: "repeatNewPassword",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputRepeatNewPass.element),
      },
    });
    this.children.button = new Button({
      text: "Сохранить",
      name: "save",
      type: "submit",
      className: `${s.btn}`,
      events: {
        click: () => this.onSubmit(),
      },
    });
  }

  onSubmit() {
    const data = validateAndGetData();

    if (data) {
      const newData = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };

      changeUserPassword(newData).then();
    }
  }

  render() {
    const template = `
      <main class="${s.container}">
        {{{ navbar }}}
        <div class="${s.profileBlock}">
          {{{ avatar }}}
          <h1 class="${s.userName}">{{ user.first_name }} {{ user.second_name }}</h1>  
          <form id="password-form" class="${s.form}">
            <ul class="${s.list}">     
              <li><p>Старый пароль</p>{{{ inputOldPass }}}</li>
              <li><p>Новый пароль</p>{{{ inputNewPass }}}</li>
              <li><p >Повторите новый пароль</p>{{{ inputRepeatNewPass }}}</li> 
            </ul>
          </form>          
          <div class=${s.errorBlock} id="errorBlock"></div>
          {{{ button }}}
        </div>
      </main>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const ProfilePassword = withStore(ProfilePasswordBase);
