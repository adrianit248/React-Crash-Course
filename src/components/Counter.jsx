import React, {useState} from 'react';
import "./Counter.css";

function Counter() {

    // THIS SECTION IS FOR THE INCREMENTING/DECREMENTING COUNTER
    const [counter, changeCount] = useState(0);

    function incrementCounter() {
        changeCount((prevCounter) => prevCounter + 1)
    }

    function decrementCounter() {
        changeCount((prevCounter) => prevCounter - 1)
    }

    // THIS SECTION IS FOR THE ADDING/REMOVING APPLES COUNTER
    const [cart, setCart] = useState({
        item: "apple",
        quantity: 0,
    });

    function removeApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1
        }))
    }

    function addApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1
        }))
    }

    // THIS SECTION IS FOR THE ADDING -/+ TO ARRAY COUNTER
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }


    return (
        <div className='body'>
            {/* FOR THE INCREMENTING/DECREMENTING COUNTER */}
            <div className='counter'>
            <button className="btns" onClick={decrementCounter}>Decrement</button>
            <p>{counter}</p>
            <button className="btns" onClick={incrementCounter}>Increment</button>    
            </div>

            {/* FOR THE ADD/REMOVE APPLES CART COUNTER */}
            <div className='counter'>
            <button className="btns" onClick={removeApple}>-</button>
            <p>{cart.item}: {cart.quantity}</p>
            <button className="btns" onClick={addApple}>+</button>    
            </div>

            {/* FOR THE ADD +/- TO ARRAY COUNTER */}
            <div className='counter'>
            <button className="btns" onClick={addMinus}>-</button>
            <p>Array Below:</p>
            <button className="btns" onClick={addPlus}>+</button>    
            </div>
            {/* BELOW: Adding "toString()" will make commas show between
            each value, making it appear visually more like
            the array it is */}
            <p>[{arr.toString()}]</p>
        </div>
    );
}

export default Counter;