import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function stats() {
    if(good + neutral + bad <= 0) {
      return (
        <>
          <h1>statistics</h1>
          <p>no feedback given</p>
        </>
      );
    }
    else return (
        <>
          <h1>statistics</h1>
          <Statistics text="good" value={good}/>
          <Statistics text="neutral" value={neutral}/>
          <Statistics text="bad" value={bad}/>
          <Statistics text="all" value={good + neutral + bad}/>
          <Statistics text="average" value={(good - bad)/(good + neutral + bad)}/>
          <Statistics text="positive" value={good/(good + neutral + bad)}/>
        </>
      )
    }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" set={setGood} value={good} />
      <Button text="neutral" set={setNeutral} value={neutral} />
      <Button text="bad" set={setBad} value={bad} />
      {stats()}
    </div>
  )
}

const Statistics = (props) => {
  return (
      <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
  <button onClick={() => props.set(props.value + 1)}>{props.text}</button>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
