import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    <div>  
      <h2>No tours Left</h2>
      <button className="btn-refresh" onClick={() => setTours(data)}>
        Refresh
      </button>
    </div>
  }

  return (  
    // Wrapper

    <div>
      <Tours tours={tours} removeTour={removeTour}> </Tours>
    </div>
  )
};

export default App;
 