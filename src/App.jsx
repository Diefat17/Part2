import { useState } from 'react'

const Nombre = ({name}) => {
  return <li>{name}</li>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    console.log(newName)
    event.preventDefault()
    const nameObject = {
      name: newName,
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
          name: <input onChange={handlePersonChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(user => <Nombre key={user.name} name={user.name}></Nombre>)}
    </div>
  )
}

export default App