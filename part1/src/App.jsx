import { useState } from 'react'
const StatisticLine = ({ text, value }) => <tr><td>{text}</td> <td>{value}</td></tr>

const Statistics = ({ stats: { bad, good, neutral } }) => {
  const all = bad + good + neutral
  const average = (good - bad) / all
  const positive = good * 100 / all + " %"

  if (all == 0) {
    return <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const AnecdotesDiv = ({ title, anecdote, vote }) => <div>
  <h1>{title}</h1>
  {anecdote}
  has {vote} votes
</div>

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const value = Math.floor(Math.random() * anecdotes.length);
    if (value == selected) nextAnecdote()
    else setSelected(value)
  }

  const voteAnecdote = () => {
    setPoints({ ...points, [selected]: points[selected] + 1 })
  }

  const most = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);

  return (
    <div>
      <AnecdotesDiv title="Anecdoate of the day" anecdote={anecdotes[selected]} vote={points[selected]} />
      <Button onClick={voteAnecdote} text="vote" />
      <Button onClick={nextAnecdote} text="next anecdote" />
      <AnecdotesDiv title="Anecdoate with most votes" anecdote={anecdotes[most]} vote={points[most]} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGood = () => setGood(good + 1)
  const onNeutral = () => setNeutral(neutral + 1)
  const onBad = () => setBad(bad + 1)

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h1>give feedback</h1>
            <div>
              <Button onClick={onGood} text="good" />
              <Button onClick={onNeutral} text="neutral" />
              <Button onClick={onBad} text="bad" />
            </div>
            <Statistics stats={{ good, bad, neutral }} />
          </td>
          <td>
            <Anecdotes />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default App