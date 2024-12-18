import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Card, Toggle } from 'shadcn-react';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css'; 
// Dummy JSON Data
const lessons = [
  {
    videoId: "kB32-Cvj0X4", // Example YouTube video ID
    assessment: {
      type: "multiple-choice",
      question: "who invented javascript?",
      options: ["bill gates", "steve jobs", "Brendan Eich", "James Arthur Gosling"],
      correctAnswer: "Brendan Eich",
    },
  },
  {
    videoId: "FAyKDaXEAgc", // Another example YouTube video ID
    assessment: {
      type: "short-answer",
      question: "Name the process plants use to make food?",
      correctAnswer: "Photosynthesis",
    },
  },
];

// Smooth scroll polyfill
smoothscroll.polyfill();

function App() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [videoEnded, setVideoEnded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for videos
  const playerRef = useRef(null);
  const assessmentRef = useRef(null);

  // Load the YouTube IFrame API when the component mounts
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };
  }, []);

  // Reinitialize player every time currentTaskIndex changes
  useEffect(() => {
    // Ensure the YT API is loaded before initializing player
    if (window.YT) {
      initializePlayer();
    } else {
      const interval = setInterval(() => {
        if (window.YT) {
          clearInterval(interval);
          initializePlayer();
        }
      }, 100); // Check every 100ms until YT is available
    }
  }, [currentTaskIndex]);

  const initializePlayer = () => {
    setVideoEnded(false);
    setIsLoading(true); // Start loading when initializing player

    if (playerRef.current) {
      playerRef.current.destroy(); // Destroy previous player instance
    }

    playerRef.current = new window.YT.Player(`youtube-player-${currentTaskIndex}`, {
      videoId: lessons[currentTaskIndex].videoId,
      events: {
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            handleVideoEnd();
          }
        },
        onReady: () => {
          setIsLoading(false); // Stop loading once the player is ready
        },
      },
    });
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const handleResponse = (response) => {
    setResponses((prev) => ({ ...prev, [currentTaskIndex]: response }));
  };

  const handleNextTask = () => {
    const assessment = lessons[currentTaskIndex].assessment;
    const userResponse = responses[currentTaskIndex];

    if (!userResponse) {
      alert("Please attempt the assessment before proceeding.");
      return;
    }

    const isCorrect =
      assessment.type === "multiple-choice"
        ? userResponse === assessment.correctAnswer
        : userResponse.trim().toLowerCase() === assessment.correctAnswer.toLowerCase();

    if (!isCorrect) {
      alert("Incorrect answer! Please try again.");
      return;
    }

    setVideoEnded(false);
    setCurrentTaskIndex((prev) => prev + 1);
  };


  return (
    <div id='maincon' className={`${darkMode ? "dark" : "light"} container`}>

<h1 className="gradient-text">Coding Sekho</h1>
      <div className="header">
        <h1 className="lesson-title">Lesson {currentTaskIndex + 1}</h1>
        <Toggle
          label="Dark Mode"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* Video Section */}
      <div className="video-container">
        <div
          id={`youtube-player-${currentTaskIndex}`}
          className="video-player"
        ></div>
        {isLoading && (
          <div className="spinner-overlay">
            <div className="spinner"></div>
          </div>
        )}
      </div>

      {/* Assessment Section */}
      {videoEnded && (
        <div ref={assessmentRef} className="card">
          <Card>
            <h2 className="text-lg font-bold mb-4">Assessment</h2>
            <p className="mb-4">{lessons[currentTaskIndex].assessment.question}</p>

            {lessons[currentTaskIndex].assessment.type === "multiple-choice" && (
              <div className="space-y-2">
                {lessons[currentTaskIndex].assessment.options.map((option, index) => (
                  <Button
                    key={index}
                    className="button button-blue"
                    onClick={() => handleResponse(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {lessons[currentTaskIndex].assessment.type === "short-answer" && (
              <Input
                type="text"
                placeholder="Type your answer here"
                className="input"
                onBlur={(e) => handleResponse(e.target.value)}
              />
             
            )}
          </Card>
          <br />
          <button
            onClick={handleNextTask}
            className="full-width-button"
            disabled={!responses[currentTaskIndex]}
          >
            Next Task
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
