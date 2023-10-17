import { useState } from "react";

const sculptureList = [{
    name: 'Homenaje a la neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Aunque Colvin es predominantemente conocida por temas abstractos que aluden a símbolos prehispánicos, esta gigantesca escultura, un homenaje a la neurocirugía, es una de sus obras de arte público más reconocibles.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'Una estatua de bronce de dos manos cruzadas sosteniendo delicadamente un cerebro humano en la punta de sus dedos.'
  }, {
    name: 'Floralis genérica',
    artist: 'Eduardo Catalano',
    description: 'Esta enorme flor plateada (75 pies o 23 m) se encuentra en Buenos Aires. Está diseñado para moverse, cerrando sus pétalos por la tarde o cuando soplan fuertes vientos y abriéndolos por la mañana.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'Una gigantesca escultura de flor metálica con pétalos reflectantes como espejos y fuertes estambres.'
  }, {
    name: 'Presencia eterna',
    artist: 'John Woodrow Wilson',
    description: 'Wilson era conocido por su preocupación por la igualdad, la justicia social, así como por las cualidades esenciales y espirituales de la humanidad. Este bronce masivo (7 pies o 2,13 m) representa lo que él describió como "una presencia negra simbólica infundida con un sentido de humanidad universal"."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'La escultura que representa una cabeza humana parece omnipresente y solemne. Irradia calma y serenidad.'
  }, {
    name: 'Moái',
    artist: 'Artista desconocido',
    description: 'Ubicados en la Isla de Pascua, hay 1,000 moái, o estatuas monumentales existentes, creadas por los primeros rapanui , que algunos creen que representan a ancestros deificados.',
    url: 'https://i.imgur.com/RCwLEoQm.jpg',
    alt: 'Tres bustos monumentales de piedra con las cabezas desproporcionadamente grandes con rostros sombríos.'
  },
]

export function MyGallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick(){
        if(index < sculptureList.length-1){
            setIndex(index + 1);
          }
        setIndex(0);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Siguiente
            </button>
            {index}
            <h2>
                <i>{sculpture.name} </i> 
                por {sculpture.artist}
            </h2>
            <h3>  
                ({index + 1} de {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Ocultar' : 'Mostrar'} detalles
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img 
                src={sculpture.url} 
                alt={sculpture.alt}
            />
        </>
    )
}