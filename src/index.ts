import {SignIn, SignUp, Profile, ProfileData, ProfilePassword, Chat, Error404, Error500} from "./pages";
import {Router} from "./core/routing/Router";
import {StoreApp} from "./core/Store";
import {getUserInfo} from "./services/Auth";

document.addEventListener("DOMContentLoaded", async () => {
  Router.use("/", SignIn);
  Router.use("/sign-up", SignUp);
  Router.use("/profile", Profile);
  Router.use("/profile/change-data", ProfileData);
  Router.use("/profile/change-password", ProfilePassword);
  Router.use("/chat", Chat);
  Router.use("/error404", Error404);
  Router.use("/error500", Error500);

  // @ts-ignore
  window.store = StoreApp;

  StoreApp.on("changed", () => {});

  let isViewablePages = true;

  if (window.location.pathname === "/" || window.location.pathname === "/sign-up") {
    isViewablePages = false;
  }

  try {
    await getUserInfo();
    Router.start();

    if (!isViewablePages) Router.go("/chat");
  } catch (e) {
    Router.start();

    if (isViewablePages) Router.go("/");
  }
});
