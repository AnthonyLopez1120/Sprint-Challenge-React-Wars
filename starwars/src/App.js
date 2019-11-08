

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import './App.css';


const App = () => {

  const [data, setData]= useState([]);

  useEffect(()=>{
    axios
    .get("https://swapi.co/api/people/", {})
    .then(res=>{
      const contain = res.data.results;
      console.log('results', contain);
      setData(contain);
    });

    
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(character=>{
        return(
          <Characters
          name={character.name}  
          gender={character.gender}
          height={character.height}
          hair_color={character.hair_color}
          eye_color={character.eye_color}

          />
        )
      })}
    </div>
  

   
  );
}

export default App;
