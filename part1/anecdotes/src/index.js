import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {

  const pointArray = new Array(anecdotes.length + 1).join('0').split('').map(parseFloat);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(pointArray)

  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min // max is exclusive min is inclusive
  }

  const handleClick = () => {
    let randVal = randomInt(0, anecdotes.length);
    setSelected(randVal);
  }

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  return(
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);
