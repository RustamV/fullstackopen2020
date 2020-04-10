import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(selectedInit())
  const [votes, setVotes] = useState(votesInit())

  function selectedInit() {
    return Math.floor(Math.random() * props.anecdotes.length)
  }

  function votesInit() {
    let arr = props.anecdotes;
    return arr.map(() => 0)
  }

  function vote() {
    return votes.map((item, index) => {
      if(index === selected) return item + 1;
      return item;
    })
  }

  function mostVoted() {
    let max = 0;
    for (let i = 1; i < votes.length; i++) {
      if(votes[i] > votes[max])
        max = i;
    }
    return max;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => setVotes(() => vote())}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <div>
      <p>{props.anecdotes[mostVoted()]}</p>
      <p>has {votes[mostVoted()]} votes</p>
      </div>
    </div>
  )
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
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)