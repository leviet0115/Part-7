import { useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const id = Number(useParams().id);
  const anec = anecdotes.find((anec) => anec.id === id);
  return (
    <div>
      <h1>{anec.content}</h1>
      <p>has {anec.votes} votes</p>
      <p>for more info see: {anec.info}</p>
    </div>
  );
};

export default Anecdote;
