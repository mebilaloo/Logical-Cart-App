import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, faShoppingCart, faSync, faRecycle } from '@fortawesome/free-solid-svg-icons';
import "./style.css";
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
    <div className="AppCounter">
      <nav className="navbar ">
      <div className="navbar-brand">
      <FontAwesomeIcon icon={faShoppingCart} className="fa m-2" />
          <span className="badge badge-info badge-pill m-2">{cartCounter}</span>
          &nbsp;
          <label>Items</label>
          </div>
          </nav>

    <div className="">
        <div className="row">
          <button className=" btn Reset-Btn m-2" onClick={handelReset}><FontAwesomeIcon icon={faSync} className="fa" /></button>
          
          <button className=" btn Reload-Btn m-2" onClick={handelRefresh}><FontAwesomeIcon icon={faRecycle} className="fa" /></button>
        </div>
        
      {counter.map((n, i) => (
        <div  className="row" key={i}>
        
          <span className="badge badge-zero m-2">{n > 0 ? n : "zero"}</span>
          <button className="btn btn-plus m-2"  onClick={() => handelIncrement(i)}><FontAwesomeIcon icon={faPlus} className="fa" /></button>
          <button className="btn btn-minus m-2"  onClick={() => handelDecrement(i)}><FontAwesomeIcon icon={faMinus} className="fa" /></button>
          <button className="btn btn-delete m-2" onClick={() => handelDelete(i)}><FontAwesomeIcon icon={faTrash} className="custom-trash-icon fa" /></button>
         
        </div>
      ))}
      </div>

    </div>
  );
};

export default App;