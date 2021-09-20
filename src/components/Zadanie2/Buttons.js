import React, { useState } from "react";

export default function Buttons({ start }) {
  const [counter, updateCounter] = useState(start);
  const [inputVal,setInputVal] = useState("");
  const incrementHandler = () => updateCounter(counter + 1);
  const decrementHandler = () => updateCounter(counter - 1);

  const changeHandler = (e) =>{
    setInputVal(e.target.value);
  }

  const updateHandler = () => {
    updateCounter(inputVal);
  };

  const resetHandler = () => {
    updateCounter(0);
    setInputVal(0);
  };

  return (
    <div>
      <button className="increment" onClick={incrementHandler}>
        +
      </button>
      <button className="decrement" onClick={decrementHandler}>
        -
      </button>
      <p className="counter">{counter}</p>
      <div>
        <label htmlFor="update">Type number to update counter</label>
        <input type="number" name="update" className="update" onChange={changeHandler}/>
        <button className="updateBtn" onClick={updateHandler}>Update counter</button>
        <button className="resetBtn" onClick={resetHandler}>Reset counter</button>
      </div>
    </div>
  );
}

Buttons.defaultProps = {
  start: 0,
};
