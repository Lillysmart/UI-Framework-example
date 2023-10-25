import { html } from "../libs/lit-html.js";

export const app =()=>{
    return html`
    <div>
    <Header>
        <h1>
            Todo App
        </h1>
        <form>
            <label>
                <span> New Task</span>
            <input/>
            </label>
            <button> Add Task</button>
        </form>
    </Header>
    <main>
        <ul></ul>
    </main>
    </div>`
}