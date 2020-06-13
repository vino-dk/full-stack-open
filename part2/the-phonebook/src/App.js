import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Person from './components/Person';
import noteService from './services/persons';

const Notification = ({ message }) => {
  if (message === null){
    return null
  }
  return(
    <div className="statusmessage">
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [statusMessage, setStatusMessage] = useState(null)

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

  const addContact = (event) => {
    event.preventDefault()
    let nameFound = false;
    let numberId = null

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
        nameFound = true;
        numberId = persons[i].id
      }
    }
    if (!nameFound) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: Math.floor(Math.random() * 1000)
      }
      noteService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setStatusMessage(`${personObject.name} was added`)
          setTimeout(() => {
            setStatusMessage(null)
          },4000)
        })
        .catch(error => {
          console.log('failed POST request to create a new contact.')
        })
    } else if(window.confirm(`${newName} is already added to phonebook, replace the old number?`)) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: Math.floor(Math.random() * 1000)
      }
      noteService
        .update(numberId, personObject)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id !== numberId ? person : updatedPerson))
          setStatusMessage(`Number of ${personObject.name} was changed to ${personObject.number}`)
          setTimeout(() => {
            setStatusMessage(null)
          },4000)
        })
        .catch(error => {
          console.log('Failed PUT request to Update phone number.')
          setStatusMessage(`Information of ${newName} was already removed from the server`)
          setTimeout(() => {
            setStatusMessage(null)
          },4000)
        })
    };
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
      <Notification message={statusMessage}/>
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
        addContact={addContact}
        
      />

      <h2>Numbers</h2>

      <Person
        persons={persons}
        filterName={filterName}
        setPersons={setPersons}
        setStatusMessage={setStatusMessage}
      />
    </div>
  );
}

export default App;
