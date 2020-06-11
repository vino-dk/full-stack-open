import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Person from './components/Person';
import noteService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    noteService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('failed at getAll')
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', newName)

    let nameFound = false;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName)
        nameFound = true;
      break;
    }
    if (!nameFound) {
      const personObject = {
        name: newName,
        id: persons.length + 1
      }
      console.log('post request')
      noteService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
        })
        .catch(error => {
          console.log('failed at posting name.')
        })
      console.log('post done')
    } else {
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
    if (!nameFound) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      console.log('post request')
      noteService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log('failed at posting.')
        })
      console.log('post done')
    } else {
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

  const handleFilterOnChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }



  return (
    <div>

      <h2>Phonebook</h2>

      <Filter
        handleFilterOnChange={handleFilterOnChange}
        filterName={filterName}
      />

      <h2>add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        handleNameOnChange={handleNameOnChange}
        handleNumberOnChange={handleNumberOnChange}
        addNumber={addNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <Person
        persons={persons}
        filterName={filterName}
      />

    </div>
  );
}

export default App;
