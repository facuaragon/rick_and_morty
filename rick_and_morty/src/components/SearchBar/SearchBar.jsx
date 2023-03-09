import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
   border: 2px solid;
   border-radius: 5px;
   border-color: grey;
   width: 200px;
   height: 30px;
   margin-right: 20px;
`

const Button = styled.button`
   background-color: #6BCC83;
   color: white;
   font-weight: bold;
   height: 30px;
   border: 0px;
`

function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <Input type='search' value={character} onChange={handleChange}/>
         <Button onClick={()=>onSearch(character)}>Agregar</Button>
      </div>
   );
}
export default SearchBar;