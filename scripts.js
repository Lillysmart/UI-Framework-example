
import { render } from './libs/lit-html.js';
import { app } from './view/app.js';
import {  getState } from './model/store.js';

const state= getState()
const view=app()

render(view , document.querySelector('[data-app]'))
const submitHandler= (event)=>{
   event.preventDefault()
if(!event.target instanceof HTMLFormElement){
   throw new Error("Form required")
}const data = new FormData(event.target)
    console.log (event)
}
document.body.addEventListener("submit" ,submitHandler)