import { createStore } from 'redux';

//Action generators-functions that return action objects


const incrementAdd = ( { incrementBy=1 } = {} ) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementAdd = ({ decrementBy=1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetAdd = () => ({
    type: 'RESET'
}) 


//reducers
//two rules of reducers
//1 it is a purre function -->  it only uses input to return output 
//2 it never changes action or state

const countReducer = (state={count: 0},action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            }
        case 'RESET':
            return{
                count: 0
            }        
        default:
            return state;    
    }
    
}

//createStore function is the core of redux.

const store = createStore(countReducer);

//subscribe function keeps looking for state change and automatically updates app when detects one.


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//action to increment by 1

store.dispatch(incrementAdd());

//action to decrement by 1

store.dispatch(decrementAdd());

//action to reset the count

store.dispatch(resetAdd());