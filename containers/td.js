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
        event.target.reset()
          dispatch(addTask({ title}));
      
        
      }
    },
  },

  connect: (prev, next, getHtml) => {
    const nextTasks = Object.values(next.tasks);
    const prevTasksIds = Object.keys(prev.tasks);

    nextTasks.forEach((item) => {
      const isNew= !prevTasksIds.includes(item.id)

      if (isNew){

         const [ul] = getHtml("list");
         const li = document.createElement("li");
         li.innerText = item.title;
         ul.appendChild(li);
      }
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
