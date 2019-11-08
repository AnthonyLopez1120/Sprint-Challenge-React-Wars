import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Characters from "./components/Characters"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://lambda-swapi.herokuapp.com/', {})
    .then(res=>{
      console.log(res.data.results)
      const container = res.data.results;
      setData(container)
    })
    .catch(err=>{
      console.log('er-er-erra eraa')
    })
  },[]);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      {data.map(char=>{
        return(
          <Characters         
          name = {char.name}
          gender = {char.gender}
          height = {char.height}
          hair_color = {char.hair_color}
          eye_color = {char.eye_color}

          />
        )
      })}


    </div>
  );
}

export default App;
