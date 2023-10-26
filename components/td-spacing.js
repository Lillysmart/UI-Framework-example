import { templateString } from "./td-spacing-hepers.js";

// const template = document.createElement("template");

// template.innerHTML = templateString

/**
 * @element td-spacing
 * @attr {'XS' | 'S' | 'M' | 'L' | 'XL'} left
 * @attr {'XS' | 'S' | 'M' | 'L' | 'XL'} right
 * @attr {'XS' | 'S' | 'M' | 'L' | 'XL'} top
 * @attr {'XS' | 'S' | 'M' | 'L' | 'XL'} bottom
 */
export class Spacing extends HTMLElement {
  #inner = this.attachShadow({ mode: 'closed' });

  constructor() {
    super();
    // Use the templateString to create the Shadow DOM structure
    const template = document.createElement("template");
    template.innerHTML = templateString;
    const node = template.content.cloneNode(true);

    this.#inner.appendChild(node);
  }
}

customElements.define("td-spacing", Spacing);
