import renderDOM from "../core/renderDom";
import {Chat} from "./chat";
import {SignIn} from "./signIn";
import {SignUp} from "./signUp";


window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")!;
  const signInPage = new SignIn();
  const signUpPage = new SignUp();

  const chatPage = new Chat();

  root.append(chatPage.getContent()!);
});
