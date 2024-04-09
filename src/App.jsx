const Course = ({course}) => {

  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map(cour => {
        return (
          <div key={cour.id}>
            <h2 key={cour.id}>{cour.name}</h2>
            {cour.parts.map(tem => <p key={tem.id}>{tem.name} {tem.exercises}</p>)}
            <h3>total of {(cour.parts.map(tem => tem.exercises)).reduce((s, p) => s + p)}</h3>
            
          </div>
        )
      })}
      
    </>
    
  )
}


const App = () => {
  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
}



export default App
