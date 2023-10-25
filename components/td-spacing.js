import { templateString } from "./td-spacing-hepers.js";


const template = document.createElement("template");


template.innerHTML = /*html*/ `
<style>
:host([left="XL"]){
    div{

    }
}
    </style>

<div>
    <slot>

    </slot>
</div>`;

/**
 * @element td-spacing
 * @attr {'XS' |'S'| 'M' |'L' | 'XL'} left
 *  @attr {'XS' |'S'| 'M' |'L' | 'XL'} right
 *  @attr {'XS' |'S'| 'M' |'L' | 'XL'}  top
 *  @attr {'XS' |'S'| 'M' |'L' | 'XL'} bottom
 */
export class Spacing extends HTMLElement {

  #inner = this.attachShadow({mode:'closed'})
  constructor() {
    super();
    const node = template.content.cloneNode(true)

    this.#inner.appendChild(node)
  }
}
customElements.define("td-spacing", Spacing);

export default Spacing;
