import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h1>{course.name}</h1>

/*
const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return <p>Number of exercises {sum}</p>
}
*/

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => {
  return (
    course.parts.map((part) =>
      <Part part={part} key={part.id} />
    )
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
    </div>
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

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))