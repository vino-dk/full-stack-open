import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h2>{course.name}</h2>

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
    course.parts.map(part => {
      return (
        <Part part={part} key={part.id} />
      )
    })
  )
}

const Course = ({ courses }) => {
  return(
    courses.map((course) => {
      return(
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <TotalExercises course={course} />
        </div>
      )
    })
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
          exercises: 18,
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
          name: 'Middleware',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))