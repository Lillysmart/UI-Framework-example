const template = document.createElement("template");

/**
 * @typedef {'XS' |'S'| 'M' |'L' | 'XL'} Measurement
 * @typedef {'left' | 'right' | 'top' | 'buttom'} Direction
 */

/**
 * @type {Array <Measurement>}
 */
const MEASUREMENTS = ["XS", "S", "M", "L", "XL"];

/**
 * @type { Array <Direction>}
 */

const DIRECTIONS = ["left", "right", "top", "buttom"];

const templateString = DIRECTIONS.map((singleDirection) => {
  const result = MEASUREMENTS.map((singleMeasurement) => {
    return `${singleDirection} =${singleMeasurement}`;
  });
  return result;
}).flat();

console.log(templateString);

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
