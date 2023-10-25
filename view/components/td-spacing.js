const template = document.createElement("template")

/**
 * @typedef {'S'| 'M' |'L' | 'XL'} measurements
 */
template.innerHTML= /*html*/`
<style>
    </style>

<div>
    <slot>

    </slot>
</div>`


/**
 * @element td-spacing
 * @attr {measurement} left
 *  @attr {measurement} right
 *  @attr {measurement}top 
 *  @attr {measurement} bottom
 */
 export class Spacing extends HTMLElement{
constructor(){
    super()
}
}
customElements.define ("td-spacing", Spacing)

export default Spacing