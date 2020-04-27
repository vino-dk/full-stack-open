import React, { useState } from 'react';

const Statistics = ({ good, bad, neutral }) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="all" value={good + neutral + bad}/>
        <Statistic text="average" value={(good - bad) / (good + bad + neutral)}/>
        <Statistic text="positive" value={100 * (good / (good + neutral + bad))} percentage="%"/>
      </div>
    );
  }
  else return <p>No feedback given</p>
}

const Statistic = (props) => {
  return (
  <p>{props.text}: {props.value} {props.percentage}</p>
  );
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  );
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>How well did we do?</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App;
