import Card from '../Card/Card.jsx';
import { CardsContainer } from './styledComponents.js';

function Cards({characters, onClose}) {
   
   return (
   <CardsContainer> 
      {characters.map(({id, name, species, gender, image},index)=>{ // puedo pasar {character}
        return (
         <Card 
            key = {index}
            name = {name} // {character.name}
            species = {species} // {character.species}
            gender = {gender} // {character.gender}
            image = {image} // {character.image}
            onClose = {() => onClose(id)}        
            />
        );
      })}
   </CardsContainer>
   );
}
export default Cards