import React from 'react';

const Persons = ({ persons, filterName }) => {
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
                            {person.name} {person.number}
                        </p>

                    )
            }
        </div>
    )
}

export default Persons;