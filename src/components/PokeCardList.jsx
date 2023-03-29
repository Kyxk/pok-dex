// import //
import PokeCard from "./PokeCard";

export default function PokeCardList() {

const pokemons=["charmender","squirtle"]

    // variable//
    //state//
    //useffect//
    
        return (
          <>
            {
            pokemons.map( (pokemon) =>{
                <PokeCard nom={pokemon} />
            } )
            }
          </>
        );
      }
    