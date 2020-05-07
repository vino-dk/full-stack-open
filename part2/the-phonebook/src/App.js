import React, { useState } from 'react';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([{id: null}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', newName)
    
    let nameFound = false;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) 
        nameFound = true;
    }
    if(!nameFound){
      const personObject = {
        name: newName,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    } else{
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  const addNumber = (event) => {
    event.preventDefault()
    let nameFound = false;

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) 
        nameFound = true;
    }
    if(!nameFound){
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else{
      window.alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameOnChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberOnChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={(addPerson, addNumber)}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameOnChange}
          />
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberOnChange}
          />
        </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
    </div>
  );
}

export default App;
