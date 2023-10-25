import { CreateComponent } from "../Utils/components.js";
import { getState, dispatch , State } from "../model/store.js";
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

        console.log(title)
      }
    },
  },

  connect: (prev, next, getHtml) => {
const html = render(next)
const [wrapper] = getHtml('wrapper')
wrapper.innerHTML= html


  /* const nextTasks = Object.values(next.tasks);
   const prevTasksIds = Object.keys(prev.tasks);
   const nextTasksIds = Object.keys(next.tasks);
   const [ul] = getHtml("list");
 
   nextTasks.forEach((item) => {
     if (prevTasksIds.includes(item.id)) return;
     const li = document.createElement("li");
     li.dataset.id = item.id;
     li.innerText = item.title;
     ul.appendChild(li);
   });
 
   prevTasksIds.forEach((id) => {
     if (nextTasksIds.includes(id)) return;
     const node = ul.querySelector(`[data-id="${id}"]`);
 
     if (node instanceof HTMLElement) {
       node.remove();
     } else {
       throw new Error("Required to be an HTML element");
     }
   });*/
 },
 template: `<div data-wrapper></div>`
});
/**
 * Creates new Html based on State
 * @param {*} props 
 * @returns {string}
 */
const render =(props)=>{

   const {tasks}=props
   /**
    * @type {Array<string>}
    */
   const taskHtml =Object.values(tasks).map(({created , id , title}) =>{
      return `<li data-id='${id}'>
       <buton>${title}</buton> 
      </li>`
   })

return `
<form data-key="add">
  <label>
    <span> Enter your Name:</span>
    <input type="text" name="title" />
  </label>
  <button type="submit">Submit</button>
</form>
<ul  >
${taskHtml.join("")}
</ul>`
}
