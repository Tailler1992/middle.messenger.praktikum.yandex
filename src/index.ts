import {renderDOM} from "./core/renderDom";
import {
  AllPages,
  Chat,
  Error404,
  Error500,
  Profile,
  ProfileChangeData,
  profileChangePassword,
  ProfileNewAvatar,
  SignIn,
  SignUp,
} from "./pages";

window.addEventListener("DOMContentLoaded", () => {
  const pages = [
    {link: "/chat", label: "Чат"},
    {link: "/sign-in", label: "Авторизация"},
    {link: "/sign-up", label: "Регистрация"},
    {link: "/error404", label: "Ошибка 404"},
    {link: "/error500", label: "Ошибка 500"},
    {link: "/profile", label: "Профиль"},
    {link: "/profile-change-data", label: "Профиль. Изменить данные"},
    {link: "/profile-change-password", label: "Профиль. Изменить пароль"},
    {link: "/profile-new-avatar", label: "Профиль. Профиль. Загрузить аватар"},
  ];

  const allPages = new AllPages({pages});
  renderDOM(allPages, "#nav");

  switch (window.location.pathname) {
    case "/chat":
      renderDOM(new Chat());
      break;
    case "/sign-in":
      renderDOM(new SignIn());
      break;
    case "/sign-up":
      renderDOM(new SignUp());
      break;
    case "/error404":
      renderDOM(new Error404());
      break;
    case "/error500":
      renderDOM(new Error500());
      break;
    case "/profile":
      renderDOM(new Profile());
      break;
    case "/profile-change-data":
      renderDOM(new ProfileChangeData());
      break;
    case "/profile-change-password":
      renderDOM(new profileChangePassword());
      break;
    case "/profile-new-avatar":
      renderDOM(new ProfileNewAvatar());
      break;
    default:
      break;
  }
});
