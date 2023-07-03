import {BaseAPI} from "./BaseAPI";
import {UsersToChat} from "./interface";

class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  getChats(): Promise<unknown> {
    return this.http.get("/", {
      headers: {"Content-Type": "application/json"},
    });
  }

  postCreateChats(data: { title: string }): Promise<unknown> {
    return this.http.post("/", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }

  deleteChats(data: { chatId: number }): Promise<unknown> {
    return this.http.delete("/", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }

  getChatUsers(id: number): Promise<unknown> {
    return this.http.get(`/${id}/users`, {
      headers: {"Content-Type": "application/json"},
    });
  }

  putAddUsers(data: UsersToChat): Promise<unknown> {
    return this.http.put("/users", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }

  deleteUsers(data: UsersToChat): Promise<unknown> {
    return this.http.delete("/users", {
      data,
      headers: {"Content-Type": "application/json"},
    });
  }

  postToken(id: number): Promise<unknown> {
    return this.http.post(`/token/${id}`, {
      headers: {"Content-Type": "application/json"},
    });
  }
}

export const ChatHTTP = new ChatsAPI();
