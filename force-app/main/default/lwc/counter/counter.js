import { LightningElement } from 'lwc';
import { Redux } from 'c/lwcRedux';
import {increment, decrement, reset} from './counterActions';

export default class Counter extends Redux(LightningElement) {
    mapStateToProps(state){
        return {counter: state.counter};
    }
    mapDispatchToProps(){
        return {increment, decrement, reset};
    }
}