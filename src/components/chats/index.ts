import Handlebars from "handlebars";
import Block from "../../core/Block";
import {LoginCard} from "../loginCard";
import {TextField, ChatsCard} from "../";
import s from "./chats.module.pcss";

export class Chats extends Block {
  init() {
    this.children.inputSearch = new TextField({
      type: "text",
      name: "",
      value: "",
      placeholder: "Поиск",
    });
    this.children.chatsCard = new ChatsCard({
      name: "Андрей",
      message: "Изображение",
      dateMes: "10:49",
      mark: "2",
    });
    this.children.chatsCard2 = new ChatsCard({
      name: "Илья",
      message: "И Human Interface Guidelines и Material Design...",
      dateMes: "12:00",
      mark: "4",
    });
    this.children.chatsCard3 = new ChatsCard({
      name: "Киноклуб",
      message: "Друзья, у меня для вас особенный выпуск...",
      dateMes: "Пн",
    });
    this.children.chatsCard4 = new ChatsCard({
      name: "Вадим",
      message: "Миллионы россиян ежедневно проводят...",
      dateMes: "Ср",
      mark: "12",
    });
    this.children.chatsCard5 = new ChatsCard({
      name: "Тет-а-теты",
      message: "В 2008 году художник Jon Rafman...",
      dateMes: "1 мая 2020",
      selected: true,
    });
    this.children.chatsCard6 = new ChatsCard({
      name: "Влад Ко",
      message: "Так увлёкся работой по курсу, что совсем заб...",
      dateMes: "Вт",
    });
    this.children.chatsCard7 = new ChatsCard({
      name: "Коллектор",
      message: "Привет! Где деньги?",
      dateMes: "12 апреля 1992",
    });
  }

  render() {
    const template = `
      <div class="${s.chats}">
          <div class="${s.user}">
              <div class="${s.avatar}"></div>
              <h1 class="${s.fullName}">Crown Jackson</h1>
          </div>
      
          <div class="${s.search}">
              {{{inputSearch}}}
          </div>
      
          <h2 class="${s.title}">Чаты</h2>
      
          <div>
              <ul>
                 {{{chatsCard}}}
                 {{{chatsCard2}}}
                 {{{chatsCard3}}}
                 {{{chatsCard4}}}
                 {{{chatsCard5}}}
                 {{{chatsCard6}}}
                 {{{chatsCard7}}}
              </ul>
          </div>
      </div>`;

    const hbTemplateDelegate = Handlebars.compile(template);

    return this.compile(hbTemplateDelegate, this.props);
  }
}
