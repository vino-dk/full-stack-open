import React from 'react';
import noteService from '../services/persons';

const Person = ({ persons, filterName, setPersons }) => {

    const handleDeleteOnClick = (id) => {
        if (window.confirm("Are you sure?")) {
            console.log('Clicked delete')
            noteService
                .remove(id)
            console.log('delete successful')
            setPersons(persons.filter(person => person.id !== id))
        }
    }

    return (
        <div>
            {
                persons
                    .filter(person => person.name
                        .toLowerCase()
                        .trim()
                        .search(filterName.toLowerCase().trim()) >= 0)
                    .map(person =>
                        <p key={person.id}>
                            {person.name}  {person.number}  {<button onClick={() => handleDeleteOnClick(person.id)}>delete</button>}
                        </p>

                    )
            }
        </div>
    )
}

export default Person;