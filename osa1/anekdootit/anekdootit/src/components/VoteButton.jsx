/* eslint-disable react/prop-types */
const VoteButton = (props) => {
    return (
        <button onClick={props.voteAnecdote}>vote anecdote</button>
    )
}

export default VoteButton;