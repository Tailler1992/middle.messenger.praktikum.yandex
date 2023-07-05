import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {NavBar, Chats, ChatsContent, ModalBackdrop, PopupAddUser, PopupAddNewChat} from "../../components";
import {withStore} from "../../core/withStore";
import s from "./chat.module.pcss";

interface ChatBaseProps {
}

class ChatBase extends Block {
  constructor(props: ChatBaseProps) {
    super(props);
  }

  init() {
    this.children.navbar = new NavBar();
    this.children.chats = new Chats({isLoaded: false});
    this.children.chatsContent = new ChatsContent({});
    this.children.modalNewChat = new ModalBackdrop({content: new PopupAddNewChat({})});
    this.children.modalAddUser = new PopupAddUser({});
  }

  render() {
    const template = `
      <main class="${s.container}">        
        {{{ navbar }}}
        {{{ chats }}}
        {{{ chatsContent }}}
        {{#if popups.newChat}} 
          {{{ modalNewChat }}} 
        {{/if}}
        {{{ modalAddUser }}}         
      </main>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const Chat = withStore(ChatBase);
