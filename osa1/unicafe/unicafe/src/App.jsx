import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  }

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }

  let average;
  let positives;
  if (all > 0) {
    average = (good - bad) / all
    positives = good / all;
    if (positives == 1) {
      positives = 100
    }
  }

  if (all > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button task={handleGoodClick} title={'good'}/>
        <Button task={handleNeutralClick} title={'neutral'}/>
        <Button task={handleBadClick} title={'bad'}/>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positives={positives}/>
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button task={handleGoodClick} title={'good'}/>
        <Button task={handleNeutralClick} title={'neutral'}/>
        <Button task={handleBadClick} title={'bad'}/> 
        <h2>statistics</h2>
        <p>No feedback</p>
      </div>
    )
  }
}

export default App