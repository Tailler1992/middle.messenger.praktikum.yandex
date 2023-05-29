import Block from "./Block";

export default function renderDOM(block: Block, selector: string = "#root") {
  const root = document.querySelector(selector);

  root!.innerHTML = "";
  root!.appendChild(block.getContent());
}
