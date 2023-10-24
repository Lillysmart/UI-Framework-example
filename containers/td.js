import { CreateComponent } from "../Utils/components.js";
import { getState, dispatch } from "../model/store.js";
import { addTask } from "../model/actions.js";

CreateComponent({
  element: "td-app",

  events: {
    submit: (event) => {
      event.preventDefault();

      if (event.target instanceof HTMLFormElement) {
        const formData = new FormData(event.target);
        const { title } = formData.get("todo"); // Use the 'name' attribute of the input element
        event.target.reset();

        dispatch(addTask({ title }));
        console.log(getState());
      }
    },
  },

  connect: (prev, next, getHtml) => {
    const nextTasks = Object.values(next.tasks);
    const prevTasksIds = Object.keys(prev.tasks);

    nextTasks.forEach((item) => {});

    
    const [ul] = getHtml("list");
    const li = document.createElement("li");
    li.innerText = ``;
    ul.appendChild(li);
  },
  template: `
    <form data-key="add">
      <label>
        <span> Enter your Name:</span>
        <input type="text" name="todo" />
      </label>
      <button type="submit">Submit</button>
    </form>
    <ul data-key="list">

    </ul>`,
});
