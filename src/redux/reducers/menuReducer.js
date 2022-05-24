import { FETCH_MENUS } from "../actions/actionTypes";
import { ADD_ITEM } from "../actions/actionTypes";

const initialState = {
    menus: [],
    message: "",
    isLoading: true,
    dishes:[],
    amount:1,
    total:0,
}

const menuReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MENUS:   
            return{
                ...state,
                menus: action.payload,
                isLoading: false,
            };
            case ADD_ITEM:
                var item = state.menus.filter((menu) => menu.id === action.payload)

                var id;

                item.map((item) => id= item.id)

                console.log("id in reducer +++", id)
                
                state.dishes.map((dish) => {
                    if (dish.id === id) {
                      return item=""
                    }
                      return item
                  });

                console.log(item, "food in reducer")

                if(item.length ===0){
                    return {
                        ...state,
                        dishes: state.dishes,
                        message: alert("Item already exists")
                    }  
                }
                return {
                    ...state,
                    dishes: state.dishes.concat(item),
                    message: alert("Item added to cart")
                }      
             default:
            return state;    
    }
}


export default menuReducer;