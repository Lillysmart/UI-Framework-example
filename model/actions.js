import { Task ,Sorting} from "./store.js";

/**
 * Adds a task to the store
 * @typedef {object} AddTask
 * @prop {'ADD_TASK'} type
 * @prop {Task}
 */


/**
 * Generate a unique ID using a combination of a timestamp and a random number.
 * @returns {string} A unique ID.
 */
export const createUniqueId = () => {
    const array = [
      Math.round(Math.random() * 10000000000),
      new Date().getTime(),
      Math.round(Math.random() * 10000000000),
    ];
  
    return array.join("-");
  };

/**
 * changes the order in which task are sorted
 * @typedef {object} ChangeSort
 *  @prop {'CHANGE_SORT'} type
 * @prop {Sorting} sorting
 */

/**
 * Starts / Stops the adding process of a new task, depending
 * on what the current phase is
 * @typedef {object} ToogleAdd
 * @prop {'TOGGLE_ADD'} type
 */

/**
 * @typedef {AddTask | ChangeSort | ToogleAdd} Action
 * 
 */

export const Action ={}

/**
 * @param {object} props
 * @param {string} props.title
 * @returns {AddTask}
 */
export const addTask =(props)=>{

    const {title}=props
    return {
        task:{
            created: new Date (),
            id:createUniqueId(),
            title,
        },
        type:"ADD_TASK"
    }
}
/**
 * @returns {ToogleAdd}
 */
export const toggleAdd=()=>({
type:"TOOGLE_ADD"
})

/**
 * @param {object} props
 * @param {Sorting} props.sorting
 * @returns {ChangeSort}
 */
export const changeSort = (props) => {
    const { sorting } = props;
    return {
      sorting,
      type: "CHANGE_SORT"
    };
  };
  