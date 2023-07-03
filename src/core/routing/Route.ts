import {Block} from '../Block';
import {renderDOM} from "./renderDom";

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

export class Route {
  private block: Block | null = null;

  constructor(
      private pathname: string,
      private readonly blockClass: any,
      private readonly query: string) {
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});

      renderDOM(this.block as any, this.query);
      return;
    }
  }
}
