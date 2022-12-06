import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useRef } from 'react';
const Task2 = () => {
const state=useSelector(state=>state)
const dispatch=useDispatch()
const value1 = useRef (0)
const value2 = useRef(0)
const [msg, setMsg] = useState({ msg1: false, msg2: false, msg3: false })

console.log("state",state)
  return (
 <>
  <div className="App">
      <header className="App-header">
        <div className="col">

            <label htmlFor="">Value 1</label>
            <div className="col">
              <input type="number" ref={value1} />
              <p className="red">{msg.msg1}</p>
            </div>
            <label htmlFor="">Value 2</label>
            <div className="col">
              <input type="number" ref={value2} />
              <p className="red">{msg.msg2}</p>
            </div>
            <label htmlFor="">Result</label>
            <div className="col">
        <h2>{state.answer}</h2>
              <p className="red">{msg.msg3}</p>
            </div>
            <div className="row">
            <button onClick={()=>dispatch({type:"ADD",a:value1.current.value,b:value2.current.value})}>Add {" "+state.addition.answer}</button>
            <button onClick={()=>dispatch({type:"SUB",a:value1.current.value,b:value2.current.value})}>Subtract {" "+state.substraction.answer}</button>
            <button onClick={()=>dispatch({type:"DIV",a:value1.current.value,b:value2.current.value})}>Devide {" "+state.division.answer}</button>
            <button onClick={()=>dispatch({type:"MUL",a:value1.current.value,b:value2.current.value})}>Multiply {" "+state.multiplication.answer}</button>
            <button onClick={()=>dispatch({type:"CLR",a:value1.current.value,b:value2.current.value})}>Clear</button>
            </div>

        </div>

      </header>
    </div>
 </>
  )
}

export default Task2