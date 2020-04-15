import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = ({part1, part2, part3}) => {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
}

const Part = ({part}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}
const Total = ({exercise1, exercise2, exercise3}) => {
  console.log("ej");
  return (
    <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} 
        part2={part2} 
        part3={part3} />
      <Total 
        exercise1={part1.exercises} 
        exercise2={part2.exercises} 
        exercise3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))