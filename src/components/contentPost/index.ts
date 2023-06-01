import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import s from "./contentPost.module.pcss";

interface ContentPostProps {
  timePost: string;
  message?: string;
  imgPath?: string;
  isMyPost?: boolean;
}

export class ContentPost extends Block {
  constructor(props: ContentPostProps) {
    super(props);
  }

  render() {
    const {imgPath, isMyPost} = this.props;
    const className = isMyPost ? `${s.post} ${s.myPost}` : s.post;

    const message = imgPath ?
        `<img src="${imgPath}" alt="photo">` :
        `<p>{{message}}</p>`;

    const template = `
      <div class="${className}">
          <div class="${s.content}">${message}</div>
          <div class="${s.isTime}">{{timePost}}</div>
      </div>
`;

    const hbTemplateDelegate = Handlebars.compile(template);
    return this.compile(hbTemplateDelegate, this.props);
  }
}
