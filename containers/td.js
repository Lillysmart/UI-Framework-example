import { CreateComponent } from "../Utils/components.js";
import { getState } from "../model/store.js";

CreateComponent({
  element: "td-app",

  events: {
   submit: (event) => {
     event.preventDefault();
     
     if (event.target instanceof HTMLFormElement) {
       const formData = new FormData(event.target);
       const name = formData.get('todo'); // Use the 'name' attribute of the input element
       event.target.reset();
 
    
         console.log(getState)
       
     }
   },
 },
 

  connect :(prev , next , getHtml)=>{

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

    </ul>`
  ,
});
