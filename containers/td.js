import { CreateComponent } from "../Utils/components.js";

CreateComponent({
  element: "td-app",

  events: {
   submit: (event , getHtml) => {
     event.preventDefault()
     /**
      * @type {any}
      */
     const eventAsAny = event

     /**
      * @type {string | undefined} 
      */
     const key=eventAsAny?.target?.dataset?.key

     if (key === "add"){

      
  const response = new FormData(event.target)
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
