import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import Card1 from './Card1/Card1';
import { useState } from 'react';

const Main = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const cakeInput = useRef(0)
  const IceInput = useRef(0)
  const ChocoInput = useRef(0)
  const [msg, setMsg] = useState({ msg1: false, msg2: false, msg3: false })


  // to handle form input and conditions
  const formHandler = (e) => {
    e.preventDefault()
    if (cakeInput.current.value) {
      if (state.cake.totalCake - parseInt(cakeInput.current.value) >= 0) { dispatch({ type: "buyCake", payload: parseInt(cakeInput.current.value) }); msg.msg1 = "" }
      else
        msg.msg1 = "qunatity not availble."
    } if (IceInput.current.value) {
      if (state.iceCream.totalIceCream - parseInt(IceInput.current.value) >= 0) { dispatch({ type: "buyIce", payload: parseInt(IceInput.current.value) }); msg.msg2 = "" }
      else
        msg.msg2 = "qunatity not availble."
    }
    if (ChocoInput.current.value) {
      if (state.chocolate.totalChocolates - parseInt(ChocoInput.current.value) >= 0) { dispatch({ type: "buyChoc", payload: parseInt(ChocoInput.current.value) }); msg.msg3 = "" }
      else
        msg.msg3 = "qunatity not availble."
    }

    cakeInput.current.value = ""
    IceInput.current.value = ""
    ChocoInput.current.value = ""
    setMsg({ ...msg })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="col">
          <form onSubmit={formHandler}>
            <label htmlFor="">Cakes</label>
            <div className="col">
              <input placeholder="Enter no. of Cakes" type="number" ref={cakeInput} />
              <p className="red">{msg.msg1}</p>
            </div>
            <label htmlFor="">IceCreams</label>
            <div className="col">
              <input type="number" ref={IceInput}  placeholder="Enter no. of IceCreams"/>
              <p className="red">{msg.msg2}</p>
            </div>
            <label htmlFor="">Chocolates</label>
            <div className="col">
              <input type="number" ref={ChocoInput}  placeholder="Enter no. of Chocolates"/>
              <p className="red">{msg.msg3}</p>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="row">
          <Card1 title={state.cake.totalCake + " Cakes"} para="Total  Remaining" faClass="fa fa-birthday-cake" count="*" color="orange" />

          <Card1 title={state.iceCream.totalIceCream + " Ice Creams"} para="Total  Remaining" faClass="fa fa-snowflake-o" count="*" color="blue" />

          <Card1 title={state.chocolate.totalChocolates + " Chocolates"} para="Total Remaining" faClass="fa fa-credit-card-alt" count="*" color="red" />
        </div>
      </header>
    </div>
  );
}

export default Main