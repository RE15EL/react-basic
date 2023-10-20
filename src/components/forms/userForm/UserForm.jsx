import { useState } from "react";

useState
export function UserForm() {
  
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });
    
    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div className="formField mb-3">
                <label>
                    Nombre:
                    <input
                        className="formField"
                        name="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="formField mb-3">
                <label>
                    Apellido:
                    <input
                        className="formField"
                        name="lastName"
                        value={person.lastName}
                        onChange={handleChange}
                    />
                </label>
            </div>
                    
            <div className="formField mb-3">
                <label>
                    Correo electrónico:
                    <input
                        className="formField"
                        name="email"
                        value={person.email}
                        onChange={handleChange}
                    />
                </label>
            </div>    
          
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
      );
  
}
