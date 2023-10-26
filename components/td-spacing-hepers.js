import { mergeArrays } from "/utils/arrays.js";

/**
 * @typedef {'XS' |'S'| 'M' |'L' | 'XL'} Measurement
 * @typedef {'left' | 'right' | 'top' | 'bottom'} Direction
 */

/**
 * @type {Array<Measurement>}
 */
const MEASUREMENTS = ["XS", "S", "M", "L", "XL"];

/**
 * @type {Array<Direction>}
 */
const DIRECTIONS = ["left", "right", "top", "bottom"];

/**
 * @type {Record<Measurement, string>}
 */
const MEASUREMENTS_MAP = {
  XS: "--sl-spacing-2x-small",
  S: "--sl-spacing-x-small",
  M: "--sl-spacing-medium",
  L: "--sl-spacing-x-large",
  XL: "--sl-spacing-3x-large",
};

const handlerJoin = (direction, measurement) => `
  :host([${direction}= "${measurement}"]) div {
    padding-${direction}: var(${MEASUREMENTS_MAP[measurement]});
  }
`;

const css = mergeArrays({
  array1: DIRECTIONS,
  array2: MEASUREMENTS,
  join: handlerJoin,
}).join("");

export const templateString = `
<style>${css}</style>
<div>
  <slot></slot>
</div>
`;

console.log(css);
console.log(templateString);
