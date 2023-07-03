import {StoreApp} from "../core/Store";
import {Message} from "../api/interface";

const sockets: Map<number, WebSocket> = new Map();

const newConnect = async (chatId: number, token: string) => {
  if (sockets.has(chatId)) {
    return;
  }

  // @ts-ignore
  const userId = StoreApp.getState().user.id;
  const url = "wss://ya-praktikum.tech/ws/chats";
  const socket = new WebSocket(`${url}/${userId}/${chatId}/${token}`);

  sockets.set(chatId, socket);

  socket.addEventListener("open", () => {
    socket.send(JSON.stringify({content: "0", type: "get old"}));
  });

  socket.addEventListener("close", (event) => {
    if (event.wasClean) {
      console.log(`Код: ${event.code} - Соединение закрыто чисто`);
    } else {
      console.log(`Код: ${event.code} - Обрыв соединения`);
    }

    sockets.delete(chatId);
    clearInterval(ping);
  });

  socket.addEventListener("error", (event: any) => {
    console.log("Ошибка", event.message);
  });

  socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);

    if (data.type && data.type === "pong") {
      return;
    }

    let messagesToAdd: Message[] = [];

    if (Array.isArray(data)) {
      messagesToAdd = data.reverse();
    } else {
      messagesToAdd.push(data);
    }

    const messageList = StoreApp.getState().messageList;

    // @ts-ignore
    messageList[chatId] = [...messageList[chatId] || [], ...messagesToAdd];
    StoreApp.dispatch({messageList});
  });

  const ping = setInterval(() => {
    socket.send(JSON.stringify({type: "ping"}));
  }, 10000);
};

const sendMessage = (id: number, message: string) => {
  const socket = sockets.get(id);

  if (socket) {
    socket.send(JSON.stringify({type: "message", content: message}));
  }
};

const closeSockets = () => {
  Array.from(sockets.values()).forEach(socket => {
    socket.close();
  });

  sockets.clear();
};

export {newConnect, sendMessage, closeSockets };
