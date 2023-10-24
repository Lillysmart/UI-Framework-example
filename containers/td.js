import { CreateComponent } from "../Utils/components.js";

CreateComponent({
  element: "td-app",

  events: {
    click: (event) => {
      console.log(event.target);
    },
  },
  template: (
    <form data-key="add">
      <label>
        <span> Enter your Name:</span>
        <input type="text" name="todo" />
      </label>
      <button type="submit"></button>
    </form>
    <ul>
      
    </ul>
  ),
});
