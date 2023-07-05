import {UserHTTP} from "../api/UsersApi";
import {Password, User, UserProfile} from "../api/interface";
import {Router} from "../core/routing/Router";
import {StoreApp} from "../core/Store";

const changeUserProfile = async (data: UserProfile) => {
  try {
    const user = await UserHTTP.putUserProfile(data) as User;

    StoreApp.dispatch({user: user});
    Router.go("/settings");

  } catch (e: any) {
    console.error("change user profile", e);
  }
};

const changeUserAvatar = async (data: FormData) => {
  try {
    const user = await UserHTTP.putUserAvatar(data) as User;
    StoreApp.dispatch({user: user});

  } catch (e: any) {
    console.error("change user avatar", e);
  }
};

const changeUserPassword = async (data: Password) => {
  try {
    await UserHTTP.putUserPassword(data);
    Router.go("/settings");

  } catch (e: any) {
    console.error("change user password", e);
  }
};

const searchUser = async (data: { login: string }) => {
  const users = await UserHTTP.postSearchUser(data) as User[];

  StoreApp.dispatch({foundUsers: users});
};

export {changeUserProfile, changeUserAvatar, changeUserPassword, searchUser};
