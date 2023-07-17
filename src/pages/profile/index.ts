import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {Avatar, Link, NavBar} from "../../components";
import {withStore} from "../../core/withStore";
import s from "./profile.module.pcss";

interface ProfileBaseProps {
}

export class ProfileBase extends Block {
  constructor(props: ProfileBaseProps) {
    super(props);
  }

  init() {
    this.children.navbar = new NavBar();
    this.children.avatar = new Avatar({isChangingImg: false});
    this.children.linkChangePass = new Link({
      label: "Изменить пароль",
      href: "/settings/change-password",
    });
    this.children.linkChangeData = new Link({
      label: "Изменить данные",
      href: "/settings/change-data",
    });
  }

  render() {
    const template = `
      <main class="${s.container}">
        {{{ navbar }}}
        <div class="${s.profileBlock}">
          {{{ avatar }}}
          <h1 class="${s.userName}">{{ user.first_name }} {{ user.second_name }}</h1>
          <ul class="${s.list}">     
            <li><p>Почта</p><p>{{ user.email }}</p></li>
            <li><p>Логин</p><p>{{ user.login }}</p></li>
            <li><p>Имя</p><p>{{ user.first_name }}</p></li>                 
            <li><p>Фамилия</p><p>{{ user.second_name }}</p></li>
            <li><p>Имя в чате</p><p>{{ user.display_name }}</p></li>
            <li><p>Телефон</p><p>{{ user.phone }}</p></li>   
          </ul>
          <div class="${s.buttons}">
            {{{ linkChangePass }}}
            {{{ linkChangeData }}}
          </div>
        </div>
      </main>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const Profile = withStore(ProfileBase);
