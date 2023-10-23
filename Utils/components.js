import {subscribe , State} from '../model/store.js'

/**
 * @callback Handler 
 * @param {Event | CustomEvent} event
 */

/**
 * @callback Connect
 * @param {State} prev
 * @param {State} next
 */

/**
 * @typedef {object} Props
 * @prop {string} element
 * @prop {string} template
 * @prop {Record<string , Handler>} events
 * @prop {Connect} connect
 */

/**
 *
 * @param {Props} props
 */


export const CreateComponent = (props) => {
  const { element , template:templateString} = props;
  if (!element.includes("-")) {
    throw new Error("element must include a hyphen");
  }

  
const template = document.createElement("template");
template.innerHTML= templateString

  class component extends HTMLElement {
    #inner = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      const node = template.content.cloneNode(true)
      this.#inner.appendChild(node);
    }

    connectedCallback() {
      this.render();
    }
  }
  customElements.define(element, component);

  return component;
};
