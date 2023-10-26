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
  return html` <div>
    <sl-dialog open label="New Task">
      <form>
        <td-spacing bottom="XL">
          <sl-input filled name="title" label="Title"  required></sl-input>
        

        <td-spacing bottom="S">
          <sl-input filled name="due" label="Due Date"  required></sl-input>
        </td-spacing>


        <td-spacing bottom="S">
          <sl-input filled name="urgency" label="urgency"  required></sl-input>
        </td-spacing>

        </td-spacing>


        <div slot="footer">
          <sl-button>Cancel</sl-button>
          <sl-button variant="primary">Save</sl-button>
        </div>

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
