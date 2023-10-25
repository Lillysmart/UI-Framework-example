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
      <header>
        <h1>Todo App</h1>
        <sl-button variant="primary">Primary</sl-button>
        <form>
          <label>
            <span> New Task</span>
            <input name="title" />
          </label>
          <button type="submit">Add Task</button>
        </form>
      </header>
      <main>
        <ul>

        </ul>
      </main>
      <h2>Task(${tasks.length || 0})</h2>
    </div>`;
  };
  
