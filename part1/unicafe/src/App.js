import React, { useState } from 'react';

const Statistics = ({ good, bad, neutral }) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad} </p>
        <p>All: {good + neutral + bad} </p>
        <Average good={good} bad={bad} neutral={neutral} />
        <Positive good={good} bad={bad} neutral={neutral} />
      </div>
    );
  }
  else return <p>No feedback given</p>
}

const Average = ({ good, bad, neutral }) => {
  if (good > 0 || bad > 0) {
    return (
      <p> Average: {(good - bad) / (good + bad + neutral)} </p>
    );
  } else return <p>Average: Need entries.</p>
}

const Positive = ({ good, bad, neutral }) => {
  if (good > 0) {
    return (<p>Positive: {100 * (good / (good + neutral + bad))} %</p>);
  }
  else return <p>Positive: Need entries.</p>
}

const App = () => {

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>How well did we do?</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
