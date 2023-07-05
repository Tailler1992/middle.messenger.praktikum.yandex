import {ChatList, ChatUsers, Message, User} from "../api/interface";
import {EventBus} from "./EventBus";

type Dispatch<State> = (nextStateOrAction: Partial<State> | Action<State>, payload?: any) => void;
type Action<State> = (dispatch: Dispatch<State>, state: State, payload: any) => void;

class Store<State extends Record<string, any>> extends EventBus {
  state: State = {} as State;

  constructor(defaultState: State) {
    super();

    this.state = defaultState;
    this.set(defaultState);
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<State>) {
    const prevState = {...this.state};

    this.state = {...this.state, ...nextState};

    this.emit("changed", prevState, nextState);
  }

  dispatch(nextStateOrAction: Partial<State> | Action<State>, payload?: any) {
    if (typeof nextStateOrAction === "function") {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload);
    } else {
      this.set({...this.state, ...nextStateOrAction});
    }
  }
}

interface DefaultState {
  user: User | {};
  chatList: ChatList[] | [];
  chatUsers: ChatUsers[] | [];
  messageList: Message[] | {};
  selectedChat: {
    title?: string;
    id?: number;
  };
  foundUsers: User[] | [];
  popups: Record<string, any> | {};
}

const defaultState: DefaultState = {
  user: {},
  chatList: [],
  chatUsers: [],
  messageList: {},
  selectedChat: {},
  foundUsers: [],
  popups: {},
};

export const StoreApp = new Store(defaultState);
