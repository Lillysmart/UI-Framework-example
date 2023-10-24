import { CreateComponent } from "../Utils/components.js";

CreateComponent({
  element: "td-app",

  events: {
    click: (event , getHtml) => {
      console.log(event.target);
    },
  },

  connect: (prev , next , getHtml),
  template: `
    <form data-key="add">
      <label>
        <span> Enter your Name:</span>
        <input type="text" name="todo" />
      </label>
      <button type="submit"></button>
    </form>
    <ul data-key="list">

    </ul>`
  ,
});
