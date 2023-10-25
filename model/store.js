import { Action } from "./actions.js"
import {reducer} from "./reduces.js"

/**
 * @typedef {object} Task
 * @prop {string} id
 *  @prop {string} title
 *  @prop {Date} created
 */
export const Task={}

/**
 * @typedef {'A-Z' |'Z-A'} sorting
 */
export const Sorting={}

/**
 *@typedef {object} Filters
 @prop {'A-Z' |'Z-A'} sorting
 */

/**
 * @typedef {object} State
 * @prop {'idle' | 'adding'} phase
 * @prop {Record <string,Task>} tasks
 * @prop {Filters} filters
 */

 export const State ={
filters:{
    sorting:'A-Z'
},
phase:"idle",
tasks:{ },
 }
/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch 
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 * 
 */



/**
 * @type {Arra<Subscription>}
 */
let Subscribers = []

/**
 * @type {Arra<State>}
 */
const states = []

/**
 * @returns {State}
 */

export const getState =()=>{
return Object.freeze({...states[0]})
}

/**
 * @param {Action}
 */

export const dispatch = (action)=>{
const prev = getState()
const next =reducer(prev, action)

Subscribers.forEach((item) => item (prev , next))
    

states.unshift(next)
}

/**
 * @param {Subscription} subscription
 * @returns {EmptyFn}
 */

export const subscribe=(subscription)=>{
Subscribers.push(subscription)
const handler =(item)=>{
item !== subscription
}
const unsubscribe=()=>{
const newSubscribers = Subscribers.filter(handler)

Subscribers=newSubscribers
}

return unsubscribe
}
