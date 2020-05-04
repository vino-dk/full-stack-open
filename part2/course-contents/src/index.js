import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h1>{course.name}</h1>

const TotalExercises = ({ course }) => {
  const sum = course.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <div>
      Total of {sum} exercises
    </div>
  )
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => {
  return (
    course.parts.map((part) =>
      <Part part={part} key={part.id} />
    )
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <TotalExercises course={course} />
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
      },
      {
        name: 'Redux',
        exercises: 18,
        id: 4
      }
    ]
  }

  /*
  const result = course.parts.filter(exercise => {
    return exercise.exercises
  });

  const total = result.reduce( (sum, exercise) => {
    console.log('what? ', sum, exercise)
    return sum + exercise
  },0)
  
  */


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))