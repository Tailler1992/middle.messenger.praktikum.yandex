import renderDOM from "../core/renderDom";
import {SignIn} from "./signIn";
import {SignUp} from "./signUp";


window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")!;
  const signInPage = new SignIn();
  const signUpPage = new SignUp();

  root.append(signUpPage.getContent()!);
});
