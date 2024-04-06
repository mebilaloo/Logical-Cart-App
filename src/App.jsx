import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState([0, 0, 0, 0]);
  const [cartCounter, setCartCounter] = useState(0);
  const handelIncrement = (i) => {
    let newFilteredArray = [...counter];
    newFilteredArray[i] += 1;
    setCounter(newFilteredArray);
    if (newFilteredArray[i] == 1) {
      setCartCounter(cartCounter + 1);
    }
  };
  const handelDecrement = (i) => {
    let newFilteredArray = [...counter];
    newFilteredArray[i] -= 1;
    setCounter(newFilteredArray);
    // setCartCounter(newFilteredArray[i]===0 ? cartCounter-1 :cartCounter)
    if (newFilteredArray[i] == 0) {
      setCartCounter(cartCounter - 1);
    }
  };
  const handelDelete = (i) => {
    let newFilteredArray = counter.filter((e, index) => i !== index);
    // newFilteredArray.global
    setCounter(newFilteredArray);
    if (newFilteredArray && cartCounter > 0) {
      setCartCounter(cartCounter - 1);
    }
  };
  const handelReset = () => {
    if (cartCounter > 0) {
      setCartCounter(0);
      setCounter([0, 0, 0, 0]);
    }
  };
  const handelRefresh=()=>{
    if(counter.length===0){
    window.location.reload(false);
    }
  }

  return (
    <div>
      <div className="Header">
        <div className="Reset button">
          <button onClick={handelReset}>Reset values</button>
        </div>
        <div className="Reload button">
          <button onClick={handelRefresh}>Reload page</button>
        </div>

        <div className="items box">
          {cartCounter} &nbsp;
          <label>items</label>
        </div>
      </div>
      {counter.map((n, i) => (
        <div key={i}>
          <p>{n > 0 ? n : "zero"}</p>

          <button onClick={() => handelIncrement(i)}>+</button>
          <button onClick={() => handelDecrement(i)}>-</button>
          <button onClick={() => handelDelete(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;