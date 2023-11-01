import Home from "./Pages/Home/Home"
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1)
  }


  return (
    <>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Home 
        title='Home Page' 
        description='This is the home page'
      />

      <h1>{count}</h1>
      <button onClick={increment}>Increment me</button>
      <button onClick={decrement}>Decrement me</button>
    </>
  )
}

export default App