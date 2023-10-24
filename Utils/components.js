import {subscribe , State} from '../model/store.js'
/**
 * @callback Gethtml
 * @param {string} key
 * @param {boolean} [strict]
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
  const { element , template:templateString , events , connect} = props;
  if (!element.includes("-")) {
    throw new Error("element must include a hyphen");
  }

  
const template = document.createElement("template");
template.innerHTML= templateString

  class component extends HTMLElement {
    #inner = this.attachShadow({ mode: "open" });
    #unsubscribe= null

    constructor() {
      super();
      const node = template.content.cloneNode(true)
      this.#inner.appendChild(node);
    }

     connectedCallback() {
      if (events) {
        Object.entries(events).forEach(([key, handler]) => {
          this.#inner.addEventListener(key, handler); // Corrected code
        });
      
      }
     if (connect){
this.#unsubscribe = (connect)=>{
  connect (prev, next)
}
     }
     }
     disconnectedCallback(){
      if (events){
        Object.entries(events).forEach(([key, handler])=>{
      this.#inner.removeEventListener([key, handler])
        })
     }
     if (this.#unsubscribe ){
      this.#unsubscribe()
      }}
  }
  customElements.define(element, component);

  return component;
};
