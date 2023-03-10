import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx"
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'

    
function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "f34d1ed75dfb.cff0824d244e69fdada3";
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=>response.json())
    .then(data=>{
      if(data.name && !characters.find(char=>char.id===data.id)){
        setCharacters((oldChars)=>[...oldChars,data]);
        //setCharacters([...characters, data]);
      }
      else if (characters.find(char=>char.id===data.id)){
        alert("esta tarjeta ya se esta mostrando")
      }
      else{
        alert("El id no existe o algo salío mal");
      }
    })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch = {onSearch}/>
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>} />
      </Routes>
      
    </div>
  )
}

export default App
