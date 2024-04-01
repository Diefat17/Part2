const Course = ({course}) => {
  const temp = course.parts
  
  return (
    <>
      <h1>{course.name}</h1>
      {temp.map(course => <p key={course.id}>{course.name} {course.exercises}</p>)}
    </>
    
  )
}

const App = () => {
  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  //console.log(course.parts[0].name)
  return <Course course={course} />
}



export default App
