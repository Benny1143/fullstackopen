const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  const contents = props.parts.map(({ name, exercises }) => <Part name={name} exercises={exercises} />)
  return (
    <div>
      {contents}
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.reduce((accumulator, { exercises }) => accumulator + exercises, 0)} />
    </div>
  )
}

export default App