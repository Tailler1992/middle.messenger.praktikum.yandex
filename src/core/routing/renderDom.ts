import {Block} from "../Block";

export function renderDOM(block: Block, selector: string): Element {
  const root = document.querySelector(selector);

  if (!root) {
    throw new Error("render DOM error");
  }

  root.innerHTML = "";
  root.appendChild(block.getContent());

  return root;
}
