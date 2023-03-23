import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx"
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Forms from './components/Forms/Forms'
import Favorites from './components/Favorites/Favorites'

    
function App () {
  const [characters, setCharacters] = useState([]);

  
  //! Event handlers

  const onSearch = (id) => {
    
    if(characters.find(char=>char.id===id)){
      return alert("esta tarjeta ya se esta mostrando");
    }
    
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "f34d1ed75dfb.cff0824d244e69fdada3";
    // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
    .then(response=>response.json())
    .then(data=>{
      if(data.name ){
        setCharacters((oldChars)=>[...oldChars,data]);
        //setCharacters([...characters, data]);
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

  //! SEGURIDAD
  const [access,setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "f@hotmail.com";
  const password = "123456";

   const login = (userData) => {
      if (userData.username===username && userData.password===password){
          setAccess(true);
          navigate('/home');
      } 
  }
 //! muestra Nav en todos lados menos en "/"

 const {pathname}=useLocation();
 
//  useEffect(() => { !access && navigate('/');}, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>

      {pathname==='/' ? <Forms login={login}/> : <Nav onSearch = {onSearch}/>}
      <Routes>
        {/* <Route path='/' element={<Forms login={login}/>}/> */}
        <Route path="/favorites" element={<Favorites/>}/>
        <Route 
          path="/home" 
          element={<Cards onClose={onClose} characters={characters}/>}
        />
        <Route 
          path="/about" 
          element={<About/>}
        />
        <Route path="/detail/:detailId" element={<Detail/>} />
      </Routes>
      
    </div>
  )
}

export default App
