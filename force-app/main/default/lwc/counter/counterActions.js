const INCREMENT_ACTION = 'INCREMENT';
const DECREMENT_ACTION = 'DECREMENT';
const RESET_ACTION = 'RESET';

export const increment = ()=> {
    return {
       type: INCREMENT_ACTION
    }
 }
 export const decrement = () => {
    return {
       type: DECREMENT_ACTION
    }
 }
 export const reset = () => {
    return { type: RESET_ACTION }
 }