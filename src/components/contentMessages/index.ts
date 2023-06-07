import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {ContentPost} from "../";
import s from "./contentMessages.module.pcss";
import photo from "../../assets/img/Photo.jpg";

export class ContentMessages extends Block {
  constructor() {
    super();
  }
  init() {
    this.children.post = new ContentPost({
      timePost: "11:44",
      message: `
        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
        попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты
        летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны,
        так как астронавты с собой забрали только кассеты с пленкой.`,
    });
    this.children.post2 = new ContentPost({
      timePost: "11:56",
      imgPath: photo,
    });
    this.children.myPost = new ContentPost({
      timePost: "12:11",
      message: "Круто",
      isMyPost: true,
    });
  }

  render() {
    const template = `
      <div class="${s.contentMessages}">
          <div class="${s.isDate}">
              <span>Сегодня</span>
          </div>
          {{{post}}}
          {{{post2}}} 
          {{{myPost}}}
      </div>`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
