import { html } from "../libs/lit-html.js";
import { State } from "../model/store.js";

/**
 * @param {State} state
 * @returns {any}
 */
export const app = (state) => {
  console.log(state);

  // Correctly destructure 'tasks' from the 'state' parameter
  const { tasks } = State;
  const taskAsArray = Object.values(tasks);

  //const taskAsArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
  return html`
   <div>
    <td-spacing  bottom="XL">123 </td-spacing>
    <td-spacing left="XL" bottom="XL">123 </td-spacing>
    <td-spacing  bottom="XL"> 123</td-spacing>
    <sl-dialog open>
      <form>
        <sl-input filled  name="title" label="Task Name" required></sl-input>

        <sl-button>Cancel</sl-button>

        <sl-button variant="primary">Save</sl-button>
      </form>
    </sl-dialog>

    <header>
      <h1>Todo App</h1>
      <sl-button variant="primary">Add Task</sl-button>
    </header>
    <main>
      <ul></ul>
    </main>
    <h2>Task(${tasks.length || 0})</h2>
  </div>`;
};
