import { Suspense } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import Spinner from "../../components/loader/Spinner";


export function About() {
  const {characters} = useCharacters();

    return (
      <div>
        <h2>Caracteres</h2>
        <Suspense fallback={<Spinner/>}>
          <ul>
            { characters && characters.map((character) => <li key={character.id}> {character.name} </li>) }
          </ul>
        </Suspense>
      </div>
    );
  }