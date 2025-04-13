import React from 'react'
import { useNavigate } from 'react-router-dom';

const Feedback = ({answers,score,questions}) => {
  const navigate=useNavigate()
  return (
    <div style={{fontSize:"1.3rem"}}  >
      <button style={{marginLeft:"80%",fontSize:"1rem",backgroundColor:"rgb(69,63,225)",color:"white"}}
      onClick={()=>navigate('/')}
      >Home</button>
      <h2>Quiz Complete!</h2>
      <p style={{color:"gray",fontSize:"1.5rem"}} >Your Score: {score}/{questions.length}</p>
      {answers.map((a, i) => (
        <div  key={i} className="feedback">
          <p><strong>Q{i + 1}:</strong></p>
          <hr />
          <p>Your Answer: {a.userAnswer.join(', ')}</p>
          {!a.correct && <p> <span style={{color:"green"}} >Correct Answer:</span> {a.correctAnswer.join(', ')}</p>}
          <p style={{color:a.correct ? "green":"Red",fontWeight:"bold"}} className={a.correct ? 'correct' : 'incorrect'}>
            {a.correct ? 'Correct' : 'Incorrect'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Feedback