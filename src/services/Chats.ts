import {ChatHTTP} from "../api/ChatsAPI";
import {ChatList, ChatUsers, UsersToChat} from "../api/interface";
import {StoreApp} from "../core/Store";
import {newConnect} from "./Messages";

const getChats = async () => {
  try {
    const chatList = await ChatHTTP.getChats() as ChatList[];

    chatList.map(async (chat) => {
      const {token} = await ChatHTTP.postToken(chat.id) as any;

      await newConnect(chat.id, token);
    });

    StoreApp.dispatch({chatList});
  } catch (e: any) {
    console.error("get chats", e);
  }
};

const createChats = async (data: { title: string }) => {
  try {
    await ChatHTTP.postCreateChats(data);

    getChats().then();
  } catch (e: any) {
    console.error("create chats", e);
  }
};

const deleteChat = async (data: { chatId: number }) => {
  await ChatHTTP.deleteChats(data);
  getChats().then();

  StoreApp.dispatch({selectedChat: {}});
};

const getChatUsers = async (id: number) => {
  const chatUsers = await ChatHTTP.getChatUsers(id) as ChatUsers[];

  StoreApp.dispatch({chatUsers});
};

const addUser = async (data: UsersToChat) => {
  await ChatHTTP.putAddUsers(data);
  getChatUsers(data.chatId).then();
};

const deleteUser = async (data: UsersToChat) => {
  await ChatHTTP.deleteUsers(data);
  getChatUsers(data.chatId).then();
};

export {getChats, createChats, deleteChat, getChatUsers, addUser, deleteUser};
