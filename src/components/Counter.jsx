import React from "react";
import { useSelector} from "react-redux";
// import { decrement, increment } from "../redux/reducers/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    // const dispatch = useDispatch();
    return (  
        <>
            <div>
                <p>My value is</p>
                <p>{count}</p>
            </div>
        </>
    );
}
 
export default Counter;