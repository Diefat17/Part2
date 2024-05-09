import { useState, useEffect } from 'react'
import personService from './services/notes'
import Notification from './components/Notification'

const Nombre = ({name, number, deletePerson, personId}) => {
  return <li>{name} {number} <button onClick={() => deletePerson(personId)} >Delete</button></li>
}

const Persons = ({temp, deletePerson}) => {
  if(temp.length == 0)return <></>
  return <>{temp.map(t => <Nombre key={t.id} name={t.name} number={t.number} deletePerson={deletePerson} personId={t.id}></Nombre>)}</>
}

const Filter = ({handleFilterChange, filter}) => {
  return <input onChange={handleFilterChange} value={filter}/>
}

const PersonForm = ({addPerson, handlePersonChange, newName, handleNumberChange, newNumber}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
       <div>name: <input onChange={handlePersonChange} value={newName}/></div>
        <div>number: <input onChange={handleNumberChange} value={newNumber}/></div>
      </div>        
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState( []) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [addedMessage, setAddedMessage] = useState('Waiting to add')

  useEffect(() => {
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])


  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const deletePerson = id => {
    
    if(id != undefined){
      console.log(id)
      const temp = persons.filter(p => p.id != id)
      window.confirm(`Delete ${persons.id}?`)
      personService
      .deleteContact(id)
      setPersons(temp)
    }
  }



  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      id: Math.floor(Math.random() *100),
      name: newName,
      number: newNumber,
    }
    
    if(!persons.map(user => user.name).includes(newName)){
      setPersons(persons.concat(nameObject))
      personService
          .create(nameObject)
          .then(initialPersons => {
            setPersons(persons.concat(initialPersons))
          })
      setAddedMessage(
        `Added ${newName}`
      )
      setTimeout(() => {
        setAddedMessage(null)
      }, 5000)
    } else {
      alert(`${newName} is already adde to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addedMessage} />
      filter shown with
      <Filter handleFilterChange={handleFilterChange} filter={filter}></Filter>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} handlePersonChange={handlePersonChange} newName={newName} handleNumberChange={handleNumberChange} newNumber={newNumber} ></PersonForm>
      <h2>Numbers</h2>
      <Persons temp={persons.filter(word => word.name.toLowerCase().includes(filter.toLowerCase()))} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App