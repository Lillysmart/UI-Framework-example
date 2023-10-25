 import "./components/td-spacing.js"
 
import { dispatch, getState, subscribe } from "./model/store.js";
import { addTask } from "./model/actions.js";

import { render } from "./libs/lit-html.js";
import { app } from "./view/app.js";

const state = getState();
const initialRender = app(getState());
const html = document.querySelector("[data-app]");

render(initialRender, html);

subscribe((_, next) => {
  const newRender = app(next);
  render(newRender, html);
});
const submitHandler = (event) => {
  event.preventDefault();
  if (!event.target instanceof HTMLFormElement) {
    throw new Error("Form required");
  }
  const data = new FormData(event.target);
  const { title } = Object.fromEntries(data);

  dispatch(addTask({ title: title.toString() }));
  event.target.reset();
};
document.body.addEventListener("submit", submitHandler);
