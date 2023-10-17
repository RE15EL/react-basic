import './MyList.css';  


export function MyList ( { elements }) {
    const chemists  = elements.filter(person => person.profession ==='químico')
    return (
        <ul> 
            {
                chemists.map((person) => <li key={person.id}>{person.name}</li>)
            } 
        </ul>
    )
}