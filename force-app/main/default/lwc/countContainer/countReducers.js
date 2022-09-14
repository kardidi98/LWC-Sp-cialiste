const INCREMENT_ACTION = 'INCREMENT';
const DECREMENT_ACTION = 'DECREMENT';
const RESET_ACTION = 'RESET';
const reducer = (counter = 0, action) => {
    switch (action.type) {
       case INCREMENT_ACTION: return counter + 1;
       case DECREMENT_ACTION: return counter - 1;
       case RESET_ACTION : return 0;
       default: return counter;
    }
 }
export default {
    counter: reducer
}