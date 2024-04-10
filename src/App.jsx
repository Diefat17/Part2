import { useState } from 'react'

const Nombre = ({name, number}) => {
  return <li>{name} {number}</li>
}

const Numbers = ({temp}) => {
  return <>{temp.map(t => <Nombre key={t.id} name={t.name} number={t.number}></Nombre>)}</>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }



  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    if(!persons.map(user => user.name).includes(newName)){
      setPersons(persons.concat(nameObject))
    } else {
      alert(`${newName} is already adde to phonebook`)
    }
    setNewName('')
    setNewNumber('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input onChange={handleFilterChange} value={filter}/>
      <h2>add a new</h2>
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
      <Numbers temp={persons.filter(word => word.name.includes(filter))}></Numbers>
    </div>
  )
}

export default App