import Grid from "./Pages/Grid/Grid";
import Home from "./Pages/Home/Home";
import { useState } from "react";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  // }

  // function decrement() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home title="Home Page" description="This is the home page"/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title="Home Page" description="This is the home page"/>} />
          <Route path="/login" element={<Login />} />
          <Grid />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Home title="Home Page" description="This is the home page" />
          <h1>{count}</h1>
          <button onClick={increment}>Increment me</button>
          <button onClick={decrement}>Decrement me</button>
        </Routes>
      </BrowserRouter>
    </> */}
    </>
  );
};

export default App;
