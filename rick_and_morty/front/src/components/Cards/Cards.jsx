import Card from '../Card/Card.jsx';
import { CardsContainer } from './styledComponents.js';

function Cards({characters, onClose}) {
  
   return (
   <CardsContainer> 
      
      {characters.map(({id, name, species, gender, image, status, origin})=>{ // puedo pasar {character}
      //   console.log(id, name, species, gender, image, status, origin);
        return (
         <Card 
            key = {id}
            name = {name} // {character.name}
            species = {species} // {character.species}
            gender = {gender} // {character.gender}
            image = {image} // {character.image}
            id={id}
            origin = {origin}
            status = {status}
            onClose = {() => onClose(id)}        
            />
        );
      })}
   </CardsContainer>
   );
}
export default Cards