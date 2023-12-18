import { useEffect, useState } from "react";
import { getCharacters } from "../services/getCharacters";

export const useCharacters = ()=> {
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        (async ()=>{
            const controller = new AbortController();
            const signal = controller.signal;

            try {
                const characters = await getCharacters(signal);
                setCharacters(characters.results);
            } catch (error) {
                console.error(error);                
            }
        })()
        
    }, [])
    
    return {characters}
}