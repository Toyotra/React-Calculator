import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "container">
        <input type = "text" id = "textInput" dir="rtl"></input>

        <div id = "AC"><button  class = "func">AC</button></div>
        <div><button id = "DEL" class = "func">DEL</button></div>
        <div><button class = "Operation" id = "divide">/</button></div>

        <div><button class = "Number" id = "1">1</button></div>
        <div><button class = "Number" id = "2">2</button></div>
        <div><button class = "Number" id = "3">3</button></div>
        <div><button class = "Operation" id = "multiply">*</button></div>

        <div><button class = "Number" id = "4">4</button></div>
        <div><button class = "Number" id = "5">5</button></div>
        <div><button class = "Number" id = "6">6</button></div>
        <div><button class = "Operation" id = "add">+</button></div>

        <div><button class = "Number" id = "7">7</button></div>
        <div><button class = "Number" id = "8">8</button></div>
        <div><button class = "Number" id = "9">9</button></div>
        <div><button class = "Operation" id = "subtract">-</button></div>

        <div><button id = "period" class = "func">.</button></div>
        <div><button class = "Number" id = "0">0</button></div>
        <div id = "equals"><button class = "Operation" >=</button></div>
     </div>
    </>
  )
}
