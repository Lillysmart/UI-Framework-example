import { CreateComponent } from "../Utils/components.js";
import { getState, dispatch } from "../model/store.js";
import { addTask } from "../model/actions.js";

CreateComponent({
  element: "td-app",

  events: {
    submit: (event) => {
      event.preventDefault();

      if (event.target instanceof HTMLFormElement) {
        const response = new FormData(event.target);

        const { title } = Object.fromEntries(response);
        event.target.reset();
        dispatch(addTask({ title }));
      }
    },
  },

  connect: (prev, next, getHtml) => {
    const nextTasks = Object.values(next.tasks);
    const prevTasksIds = Object.keys(prev.tasks);
    const nextTasksId = Object.keys(next, tasks);
    const [ul] = getHtml("list");

    nextTasks.forEach((item) => {
      if (prevTasksIds.includes(item.id)) return;
      const li = document.createElement("li");
      li.dataset.id = item.id
      li.innerText = item.title;
      ul.appendChild(li);
    });

    prevTasksIds.forEach((item) => {
      if (nextTasksId.includes(item.id)) return;
      const node =ul.querySelector(`[data-id=${id}]`)
    });
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
