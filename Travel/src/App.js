import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";


const App = () => {

  const [tours,setTours]=useState(data);
  const[interested,interestedButtonFlag]=useState(false);

  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);

  }

  function keepTour(id){
    const newTours=tours.filter(tour=>tour.id===id);
    setTours(newTours);
    interestedButtonFlag(true);

  }


   if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>
          Refresh
        </button>

      </div>
    );
  }
  
  else{
    return (
      <div>
     
        <Tours tours={tours} removeTour={removeTour} keepTour={keepTour} button={interested}></Tours>
  
      </div>
    );
  }
};

export default App;
