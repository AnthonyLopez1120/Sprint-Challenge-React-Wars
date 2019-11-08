import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
    .then(res=>{
      console.log(res.data.results)
    })
    .catch(err=>{
      console.log('er-er-erra eraa')
    })
  })


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>


    </div>
  );
}

export default App;
