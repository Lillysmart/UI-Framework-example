import { subscribe,dispatch, getState } from "./model/store.js";

import { addTask ,changeSort ,toggleAdd } from "./model/actions.js";

subscribe((_,next)=>{
    console.log(next)
})
dispatch(toggleAdd())
(toggleAdd())
(toggleAdd())
(addTask({title:"hello",}))
(addTask({title:"World",}))
changeSort({sorting: "Z-A"})
(toggleAdd())

console.log(getState())