const template = document.createElement("template");


template.innerHTML = /*html*/ `
<style>
:host([left="XS"]){
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
  constructor() {
    super();
  }
}
customElements.define("td-spacing", Spacing);

export default Spacing;
