import { subscribe, State } from "../model/store.js";
/**
 * @callback Gethtml
 * @param {string} key - data key attribute value of an element to find
 * @param {boolean} [strict] -if true , throws an error if not a single match is found , true by default
 *
 * @returns {Array<HTMLElement>}
 */

/**
 * @callback Handler
 * @param {Event | CustomEvent} event
 * @param  {Gethtml} getHtml
 */

/**
 * @callback Connect
 * @param {State} prev
 * @param {State} next
 * @param {Gethtml} getHtml
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
 * @param {any} NodeList 
 * @returns {Array<HTMLElement>}
 */
const nodeListToArray =(NodeList)=>{
 const result= Array.from(NodeList)

 return result
}

/**
 *
 * @param {Props} props
 */

export const CreateComponent = (props) => {
  const { element, template: templateString, events, connect } = props;
  if (!element.includes("-")) {
    throw new Error("element must include a hyphen");
  }

  const template = document.createElement("template");
  template.innerHTML = templateString;

  class component extends HTMLElement {
    #inner = this.attachShadow({ mode: "open" });
    #unsubscribe = null;
    #listeners =

    constructor() {
      super();
      const node = template.content.cloneNode(true);
      this.#inner.appendChild(node);
    }

    connectedCallback() {
const getHtml = (key , strict)=>{
const result =this.#inner.querySelector(`[data-key ="${key}"]`)
if (strict !==false && results.length <= 0){

  throw new Error (`"no elements found with data key ="${key} "`)
}
 return nodeListToArray(results) 
}

      if (events) {
        
        Object.entries(events).forEach(([key, handler]) => {
          const wrapper = (event)=>{
handler (event, getHtml) }
         this.#listeners .push({key ,wrapper})
          this.#inner.addEventListener(key, handler); // Corrected code
        });
      }

      if (connect) {
        const wrapper = (prev, next) => {
          connect(prev,next, getHtml)
        };

      }
        this.#unsubscribe = (connect) => {
          connect(prev, next);
        };
      }
    }
    disconnectedCallback() {


      if (events) {

        this.#listeners.forEach(([key, handler]) => {

          this.#inner.removeEventListener([key, handler]);
        });
      }
      if (this.#unsubscribe) {
        this.#unsubscribe();
      }
    }
  }
  customElements.define(element, component);

  return component;
};
