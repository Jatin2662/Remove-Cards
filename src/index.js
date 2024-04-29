import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Data} from './assets/Data.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App(){

  return(
    <div>
      <Cards />
    </div>
  );
}


function Cards(){

  const [tours, setTours] = useState(Data);

  const update = (id)=>{
    const items = tours.filter((tour)=> tour.id != id);
    setTours(items);
  }

  return(
    <>
    <h1>Search here</h1>
    <div className="Cards">
      
      {tours.map((tour)=>{
        const {id, image, cost, title, description} = tour;

        return(
          <div className="card" key={id}>
            <div className="image">
              <img src={image}></img>
              <div className="cost">{cost}</div>
            </div>
            <div className="title">{title}</div>
            <p>{description}</p>
            <button className="btn" onClick={()=>{update(id)}}>Not Interested</button>
          </div>
        );
      })}
    </div>
    </>
  );
}