import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "container">
        <input type = "text" id = "textInput"></input>

        <button class = "AC">AC</button>
        <button class = "DEL">DEL</button>
        <button class = "Operation" id = "divide">/</button>

        <button class = "Number" id = "1">1</button>
        <button class = "Number" id = "2">2</button>
        <button class = "Number" id = "3">3</button>
        <button class = "Operation" id = "multiply">*</button>

        <button class = "Number" id = "4">4</button>
        <button class = "Number" id = "5">5</button>
        <button class = "Number" id = "6">6</button>
        <button class = "Operation" id = "add">+</button>

        <button class = "Number" id = "7">7</button>
        <button class = "Number" id = "8">8</button>
        <button class = "Number" id = "9">9</button>
        <button class = "Operation" id = "subtract">-</button>

        <button class = "period">.</button>
        <button class = "0">0</button>
        <button class = "equals">=</button>
     </div>
    </>
  )
}
