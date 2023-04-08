import useCharacter from "../../hooks/useCharacter";
import styles from "./Detail.module.css"

const Detail = () => {
  const character = useCharacter();

  return (
    <div className={styles.container}> 
      {character.name ? (
        
          <div className={styles.card}>
            <h2 className={styles.title}>{character.name}</h2>
            <p className={styles.paragraph}>{character.status}</p>
            <p className={styles.paragraph}>{character.species}</p>
            <p className={styles.paragraph}>{character.gender}</p>
            <p className={styles.paragraph}>{character.origin?.name}</p>
            <img src={character.image} alt="img" />
            <p className={styles.cardFooter}>Rick and Morty API</p>
          </div>    
        
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;