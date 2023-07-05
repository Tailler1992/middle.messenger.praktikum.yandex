import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import s from "./contentPost.module.pcss";

interface ContentPostProps {
  time: string;
  content: string;
  isMyPost?: boolean;
}

export class ContentPost extends Block {
  constructor(props: ContentPostProps) {
    super(props);
  }

  render() {
    const template = `
      <div class="${s.post} {{#if isMyPost}} ${s.myPost} {{/if}}">
          <div class="${s.content}">
            <p>{{ content }}</p>
          </div>
          <div class="${s.isTime}">{{ time }}</div>
      </div>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}
