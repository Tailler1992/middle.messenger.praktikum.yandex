import renderDOM from "../core/renderDom";
import {SignIn} from "./signIn";


window.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root")!;
  const signInPage = new SignIn();

  root.append(signInPage.getContent()!);
});
