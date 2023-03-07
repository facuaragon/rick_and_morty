import Card from './Card';

export default function Cards({characters}) {
   const onClose = () => window.alert("emulamos que se cierra la card");
   return (
   <> 
      {characters.map(({name, species, gender, image})=>{ // puedo pasar {character}
        return (
         <Card 
            name = {name} // {character.name}
            species = {species} // {character.species}
            gender = {gender} // {character.gender}
            image = {image} // {character.image}
            onClose = {onClose}        
            />
        );
      })}
   </> // <div/>
   );
}
