import { useState } from 'react'

const Nombre = ({name, number}) => {
  return <li>{name} {number}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '33-44-53235234'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    console.log(newName)
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    
    if(!persons.map(user => user.name).includes(newName)){
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${newName} is already adde to phonebook`)
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
         <div>name: <input onChange={handlePersonChange} value={newName}/></div>
          <div>number: <input onChange={handleNumberChange} value={newNumber}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(user => <Nombre key={user.name} name={user.name} number={user.number}></Nombre>)}
    </div>
  )
}

export default App