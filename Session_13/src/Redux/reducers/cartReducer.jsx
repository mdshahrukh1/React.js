import { ADD_ITEM, REMOVE_ITEM } from "../actions";

const initialState = {
    items:[]
}

function cartReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ITEM :
            //check if the item exist in cart then increase the quantity
            //add quantity property 1 for very first time adding product 
            //{product: action.payload,quantity:1}
            return {...state, items: [...state.items,action.payload]}
        case REMOVE_ITEM :
            return {...state, items: state.items.filter(data => data.id != action.payload)}
        default:
            return state;    
    }
}

export default cartReducer;