import renderDOM from "../core/renderDom";
import {AllPages} from "./AllPages";
import {Chat} from "./chat";
import {Error404} from "./error404";
import {Error500} from "./error500";
import {Profile} from "./profile";
import {ProfileChangeData} from "./profileChangeData";
import {profileChangePassword} from "./profileChangePassword";
import {ProfileNewAvatar} from "./profileNewAvatar";
import {SignIn} from "./signIn";
import {SignUp} from "./signUp";


window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")!;

  const signInPage = new SignIn();
  const signUpPage = new SignUp();
  const chatPage = new Chat();
  const error404Page = new Error404();
  const error500Page = new Error500();
  const ProfilePage = new Profile();
  const ProfileChangeDatePage = new ProfileChangeData();
  const profileChangePasswordPage = new profileChangePassword();
  const ProfileNewAvatarPage = new ProfileNewAvatar();

  const pages = [
    {link: "/chat", label: "Чат"},
    {link: "/signin", label: "Авторизация"},
    {link: "/signup", label: "Регистрация"},
    {link: "/error404", label: "Ошибка 404"},
    {link: "/error500", label: "Ошибка 500"},
    {link: "/profile", label: "Профиль"},
    {link: "/profilechangedata", label: "Профиль. Изменить данные"},
    {link: "/profilechangepassword", label: "Профиль. Изменить пароль"},
    {link: "/profilenewavatar", label: "Профиль. Профиль. Загрузить аватар"},
  ];

  const allPages = new AllPages({pages});
  renderDOM(allPages, "#nav");

  //root.append(ProfileNewAvatarPage.getContent()!);

  switch (window.location.pathname) {
    case "/chat":
      renderDOM(chatPage);
      break;
    case "/signin":
      renderDOM(signInPage);
      break;
    case "/signup":
      renderDOM(signUpPage);
      break;
    case "/error404":
      renderDOM(error404Page);
      break;
    case "/error500":
      renderDOM(error500Page);
      break;
    case "/profile":
      renderDOM(ProfilePage);
      break;
    case "/profilechangedata":
      renderDOM(ProfileChangeDatePage);
      break;
    case "/profilechangepassword":
      renderDOM(profileChangePasswordPage);
      break;
    case "/profilenewavatar":
      renderDOM(ProfileNewAvatarPage);
      break;
    default:
      break;
  }
});
