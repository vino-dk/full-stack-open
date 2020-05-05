import React from 'react';

const Header = ({ course }) => <h2>{course.name}</h2>

const TotalExercises = ({ course }) => {
    const sum = course.parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)
    return <div>Total of {sum} exercises</div>
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => {
    return (
        course.parts.map(part => {
            return <Part part={part} key={part.id} />
        })
    )
}

const Course = ({ courses }) => {
    return courses.map((course) => {
        return (
            <div key={course.id}>
                <Header course={course} />
                <Content course={course} />
                <TotalExercises course={course} />
            </div>
        )
    })
}

export default Course;