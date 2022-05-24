import { FETCH_MENUS } from "./actionTypes";
import { ADD_ITEM } from "./actionTypes";

export const fetchMenus = () => (dispatch) => {
    fetch("http://localhost:3001/menus")
    .then((res) => res.json())
    .then((data) => 
        dispatch({
            type: FETCH_MENUS,
            payload: data,
        })
    )
}

export const addFoodItem = (foodId) => (dispatch) => {
    console.log(foodId, ">>selected food in action")
    dispatch({
        type: ADD_ITEM,
        payload: foodId,
    })
}