import React from 'react';

const PersonForm = ({ newName, newNumber, handleNameOnChange, handleNumberOnChange, addContact }) => {

    return (
        <form onSubmit={ addContact }>
            <div>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameOnChange}
                    />
                </div>
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