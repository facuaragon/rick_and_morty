import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const Detail = () => {

    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "f34d1ed75dfb.cff0824d244e69fdada3";
        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    console.log(character);

    return (
        <div>
            <button>
                <Link to="/home">Home</Link>
            </button>
            <h1>{character?.name}</h1> 
            <p>{character?.status}</p>
            <p>{character?.specie}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character?.name}/>
        </div>
    );
}

export default Detail;