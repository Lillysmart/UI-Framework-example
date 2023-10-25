import { html } from "../libs/lit-html.js";

/**
 * @param {State} state
 * @returns {any}
 */
export const app = (state) => {
    console.log(state);
    const { tasks } = state; // This line should be corrected to use 'state'

    const taskAsArray = Object.values(tasks);

    return html` <div>
        <header>
            <h1>Todo App</h1>
            <form>
                <label>
                    <span> New Task</span>
                    <input name="title" />
                </label>
                <button type="submit">Add Task</button>
            </form>
        </header>
        <main>
            <ul></ul>
        </main>
        <h2>Task(${taskAsArray.length || 0})</h2>
    </div>`;
};
