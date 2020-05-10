import React from 'react';

const PersonForm = ({ newName, newNumber, handleNameOnChange, handleNumberOnChange, addNumber, addPerson}) => {

    return (
        <form onSubmit={(addPerson, addNumber)}>
            <div>
                name:
                <input
                    value={newName}
                    onChange={handleNameOnChange}
                />
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberOnChange}
                    />
                </div>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;