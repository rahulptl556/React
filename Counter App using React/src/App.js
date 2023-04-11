import { useState } from "react";
import "./App.css";


function App() {

  const[count,setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    // Wrapper
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center bg-[#344151]  ">
      
    <div className="text-[#0398d4] font-medium "> Increment & Decrement </div>

    <div className=" bg-white flex gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
      <button onClick={decrementHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl "> - </button>
      <div className=" text-center font-bold  text-5xl "> {count} </div>
      <button onClick={incrementHandler} className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl " > + </button>
    </div>

    <button onClick={resetHandler} className=" text-white bg-[#0398d4] py-2 px-5 rounded-sm text-lg " >Reset</button>


    </div>
  );
}

export default App;
