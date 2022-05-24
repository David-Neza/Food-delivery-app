import { ADD_ITEM } from "../actions/actionTypes";

const initialState = {
    dishes:[],
    total:0,
}

const orderReducer = (state=initialState, action) => {
    switch(action.actiont){
        case ADD_ITEM:
            return{
                ...state,
                dishes:action.payload,
                total: action.payload
            }
        default:
            return state;    
    }
}

export default orderReducer;