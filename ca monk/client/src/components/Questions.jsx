import React, { useEffect, useState } from 'react';
import Feedback from './Feedback';



const Questions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState([]);
  const [remainingOptions, setRemainingOptions] = useState([]);
  const [timer, setTimer] = useState(30);
  const [showFeedback, setShowFeedback] = useState(false);

  const [question1,setquestion1]=useState([])
  const questions=question1
  const current = questions[currentIndex];
  const sentenceParts = current?.question?.split("_____________");






  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/data");
        const data = await res.json();
        // console.log("fetched data:", data);
  
        const questions = data.questions; 
        // console.log("Parsed questions:", questions);
  
        if (Array.isArray(questions)) {
          setquestion1(questions);
        } else {
          console.warn("No questions found ");
        }
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };
  
    fetchData();
  }, []);
  

useEffect(() => {
  console.log('questions1 updated:', question1);
}, [question1]);
useEffect(() => {
  if (!current || !Array.isArray(current.correctAnswer) || !Array.isArray(current.options)) {
    return;
  }

  setUserAnswer(Array(current.correctAnswer.length).fill(null));
  setRemainingOptions([...current.options]);
  setTimer(30);
  console.log(sentenceParts);
}, [currentIndex, current]);


  useEffect(() => {
    if (timer === 0) handleNext();
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOptionClick = (word) => {
    const index = userAnswer.findIndex(x => x === null);
    if (index === -1) return;
    const updated = [...userAnswer];
    updated[index] = word;
    setUserAnswer(updated);
    setRemainingOptions(remainingOptions.filter(w => w !== word));
  };


  const handleNext = () => {
    const correct = JSON.stringify(userAnswer) === JSON.stringify(current.correctAnswer);
    setAnswers([...answers, { userAnswer, correctAnswer: current.correctAnswer, correct }]);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowFeedback(true);
    }
  };

  const isFilled = userAnswer.every(x => x !== null);

  if (showFeedback) {
    const score = answers.filter(a => a.correct).length;
    return (
      
     <Feedback answers={answers} score={score} questions={questions}/>
    );
  }
  if (!current) {
    return <div style={{fontSize:"2.5rem"}}>Loading questions...</div>;
  }else
  return (
    <div className="app">
    
      <h2>Question {currentIndex + 1}</h2>
      <span>Time Left: {timer}s</span>
      <p style={{marginLeft:"7%",marginRight:"7%"}} className="sentence">
      <span style={{fontSize:"2.2rem"}} >Q{currentIndex + 1} .</span>
        {sentenceParts?.map((part, idx) => (
          <span style={{fontSize:"2.2rem"}} key={idx}>
            {part}
            {idx < userAnswer.length && (
              <span className="blank" >
                {userAnswer[idx] || '_____'}
              </span>
            )}
          </span>
        ))}
      </p>
      {remainingOptions.length > 0 &&  <label style={{color:"black",fontSize:"1.5rem",display:"flex",fontWeight:"bold"}}> Options : -</label> }
 
      <br />
      <div style={{display:"flex",justifyContent:"space-evenly"}} >
        {remainingOptions.map((word, i) => (
          <button key={i} onClick={() => handleOptionClick(word)}>{word}</button>
        ))}
      </div>
      <div className="controls">
       
        <br />
        <br />
        <br />
        <br />
        <button className='submit' onClick={handleNext} disabled={!isFilled}>Next</button>
      </div>
    </div>
  );
};

export default Questions;