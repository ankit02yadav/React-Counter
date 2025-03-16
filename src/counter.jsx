import React,{useState} from 'react';
import './counter.css'

// React Hook = special function taht allow function components 
//              to use react feacture without writing class components
//              (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState = a react hook that allow creation of a statefull variablee 
//            and a setter funcion its vale in the virtual DOM 
//           [name, setName]


function Counterr() {
  let count = 0;

  const Decrement = () => {
    count -= 1;
    let digit = document.getElementById('digit');
    digit.innerText = `${count}`;
  }
  const increment = () => {
    count += 1;
    let digit = document.getElementById('digit');
    digit.innerText = `${count}`;
  }
  const reset = () => {
    count = 0;
    let digit = document.getElementById('digit');
    digit.innerText = `${count}`;
  }

  return (
    <div className="container">
      <div className="digit" id="digit">{count}</div>
      <div className="buttons">
        <button onClick={Decrement} >Decrement</button>
        <button onClick={reset} className="reset">Reset</button>
        <button onClick={increment} >Increment</button>
      </div>
    </div>
  );
}

/* 
function Counter(){
  const [name,setName] = useState("guest");
  const updateName = () =>{
    setName("ankit yadav");
  }
  return(
    <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
  );
}
*/
function Counter(){
  const [count,setCount] = useState(0);
  const decrement = () => {
    setCount(count-1);
  }
  const reset = () => {
    setCount(0);
  }
  const increment = () => {
    setCount(count+1);
  }
  return(
    <div className="container">
      <div className="digit">{count}</div>
      <div className="button">
        <button onClick={decrement} >Decrement</button>
        <button className='reset' onClick={reset} >reset</button>
        <button onClick={increment} >Increment</button>
      </div>
    </div>
  );
}
export default Counter;
