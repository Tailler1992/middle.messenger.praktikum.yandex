import {AuthHTTP} from "../api/AuthAPI";
import {SignInData, SignUpData, User} from "../api/interface";
import {Router} from "../core/routing/Router";
import {StoreApp} from "../core/Store";
import {closeSockets} from "./Messages";

const signIn = async (data: SignInData) => {
  try {
    await AuthHTTP.postSignIn(data);
    getUserInfo().then();

    Router.go("/messenger");
  } catch (e: any) {
    console.error("sign in", e);
  }
};

const getUserInfo = async () => {
  const userData = await AuthHTTP.getUserInfo() as User;

  StoreApp.dispatch({user: userData});
};

const signUp = async (data: SignUpData) => {
  try {
    await AuthHTTP.postSignUp(data);
    getUserInfo().then();

    Router.go("/messenger");
  } catch (e: any) {
    console.error("sign up", e.message);
  }
};

const logout = async () => {
  try {
    closeSockets();
    await AuthHTTP.postLogout();

    StoreApp.dispatch({user: {}});
    Router.go("/");
  } catch (e: any) {
    console.error("logout", e.message);
  }
};

export {signIn, getUserInfo, logout, signUp};
