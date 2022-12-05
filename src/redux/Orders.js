import * as ActionTypes from './ActionTypes';

export const Orders = (state = {
        isLoading: false,
        errMess: null,
        orders: []
    }, action) => {
    console.log(state.orders)
    switch(action.type) {
        case ActionTypes.ADD_ORDERS:
            return {...state, isLoading:false, errMess:null, orders: action.payload};

        case ActionTypes.ORDERS_LOADING:
            return {...state, isLoading:true, errMess:null};
        
        case ActionTypes.ORDERS_FAILED:
            return {...state, isLoading:false, errMess:action.payload};
            
        default:
            return state;
    }
}