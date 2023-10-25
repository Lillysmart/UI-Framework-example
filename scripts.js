
import { render } from './libs/lit-html.js';
import { app } from './view/app.js';
import {  getState } from './model/store.js';

const state= getState()
const view=app()

render(view , document.querySelector('[data-app]'))