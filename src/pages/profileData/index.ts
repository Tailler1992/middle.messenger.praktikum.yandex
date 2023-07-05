import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Avatar, Button, NavBar, TextField} from "../../components";
import {changeUserProfile} from "../../services/Users";
import {isValidateInput, validateAndGetData} from "../../core/utils/validateForm";
import {withStore} from "../../core/withStore";
import s from "./profileData.module.pcss";

interface ProfileDataBaseProps {
}

class ProfileDataBase extends Block {
  constructor(props: ProfileDataBaseProps) {
    super(props);
  }

  init() {
    this.children.navbar = new NavBar();
    this.children.avatar = new Avatar({isChangingImg: true});
    this.children.inputEmail = new TextField({
      type: "email",
      value: this.props.user.email,
      name: "email",
      placeholder: "Новая почта",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputEmail.element),
      },
    });
    this.children.inputLogin = new TextField({
      type: "text",
      value: this.props.user.login,
      name: "login",
      placeholder: "Новый логин",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputLogin.element),
      },
    });
    this.children.inputFirstName = new TextField({
      type: "text",
      value: this.props.user.first_name,
      name: "first_name",
      placeholder: "Новое имя",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputFirstName.element),
      },
    });
    this.children.inputSecondName = new TextField({
      type: "text",
      value: this.props.user.second_name,
      name: "second_name",
      placeholder: "Новая фамилия",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputSecondName.element),
      },
    });
    this.children.inputDisplayName = new TextField({
      type: "text",
      value: this.props.user.display_name,
      name: "display_name",
      placeholder: "Новое имя в чате",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputDisplayName.element),
      },
    });
    this.children.inputPhone = new TextField({
      type: "text",
      value: this.props.user.phone,
      name: "phone",
      placeholder: "Новый телефон",
      variant: true,
      events: {
        blur: () => isValidateInput(this.children.inputPhone.element),
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
      changeUserProfile(data).then();
    }
  }

  render() {
    const template = `
      <main class="${s.container}">
        {{{ navbar }}}
        <div class="${s.profileBlock}">
          <div class="${s.avatar}">
            {{{ avatar }}}
          </div>
          <form class="${s.form}">
            <ul class="${s.list}">
              <li><p>Почта</p>{{{ inputEmail }}}</li>
              <li><p>Логин</p>{{{ inputLogin }}}</li>
              <li><p>Имя</p>{{{ inputFirstName }}}</li>                 
              <li><p>Фамилия</p>{{{ inputSecondName }}}</li>
              <li><p>Имя в чате</p>{{{ inputDisplayName }}}</li>
              <li><p>Телефон</p>{{{ inputPhone }}}</li>   
            </ul>      
          </form>     
          <div class=${s.errorBlock} id="errorBlock"></div>   
          {{{ button }}}
        </div>
      </main>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const ProfileData = withStore(ProfileDataBase);
