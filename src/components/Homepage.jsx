import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import { fetchMenus } from "../redux/actions/menusAction";
import { addFoodItem } from "../redux/actions/menusAction";

const Homepage = () => {
    const {menus} = useSelector((state) => state.menuReducer);

    const {dishes} = useSelector((state) => state.menuReducer);

    const {amount} = useSelector((state) => state.menuReducer);

    const {total} = useSelector((state) => state.menuReducer);

    console.log(menus, "my menus");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenus());
    },[]);

    const addItem = (foodId) => {
      
        console.log(foodId, "food id");

        console.log(foodId, "selected food id--")
        dispatch(addFoodItem(foodId));

        console.log(dishes.name, "dish name in addItem")
        dishes.map((dish) => {
            return(
            console.log(dish.name)
        )}
        )
    }

    return (  
        <div className="main-page">
            <Navbar />
            <div className="title">
                <h1>Fried Chicken Masters</h1>
            </div>
            <div className="main">
                <div className="main-content">
                    {
                        menus.map((menu) => {
                            return(
                                <div key={menu.id} className="card">
                                <img src={menu.pic} alt="" />   
                                <p className="menu-name">{menu.name}</p>
                                <p className="menu-details">{menu.Details}</p>
                                    <div className="button-bg">
                                        <button className="add-button"
                                            onClick={()=>{
                                                addItem(menu.id)
                                            }
                                            }
                                        > + Add To Cart</button>    
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="order-content">
                    <div className="order-heading">
                        <p>Your order:</p>
                    </div>
                    <p className="order-subheading">Items:</p>

                    <div className="price-details">
                            {
                                dishes.map((dish) => {
                                    return(
                                        <div key={dishes.id} className="item">
                                        {console.log(dishes.name, "name of dish in card---")}
                                        <p>$11 {dish.name} </p>
                                        <div className="calcs">
                                            <div className="adding">+</div> <div className="subtracting">-</div><div className="dollar">{amount}x</div>    
                                        </div>  
                                    </div>
                                    )}
                                )}
                       
                    </div>
                    <div className="total">
                        <p className="total-t">Total:</p>
                        <p className="total-p">${total}</p>
                    </div>
                    <button className="order-button">Order</button>
                </div>
           </div> 
        </div>
    );
}
 
export default Homepage;