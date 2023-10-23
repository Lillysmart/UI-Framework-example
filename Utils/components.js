/**
 * @typedef {object} Props
 * @prop {string} element
 * */

/**
 * 
 * @param {Props} props 
 */

export const CreateComponent =(props)=>{

    const {element}=props
    if (!element.includes("-")){
      throw new Error ("element must include a hyphen")
    }
    class component extends HTMLElement{
    

    }
}