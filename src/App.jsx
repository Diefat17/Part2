const Course = ({course}) => {

  const copy = (course.parts).map(tem => tem.exercises)

  return (
    <>
      <h1>{course.name}</h1>
      {(course.parts).map(course => <p key={course.id}>{course.name} {course.exercises}</p>)}
      <h2>total of {copy.reduce((s, p) => s + p)} exercises</h2>
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
      ,
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}



export default App
