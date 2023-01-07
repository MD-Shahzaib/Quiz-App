// quiz code 2---------------------------------------------------------.

import StartBox from "./components/StartBox";
import QuestionBox from "./components/QuestionBox";
import ResultBox from "./components/ResultBox";
function App() {
  // fetch data from api call.
  // const getData = fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple')
  //   .then(res => res.json())
  //   .then((data) => { console.log(data.results) })
  return (
    <>
      {/* <StartBox /> */}
      <QuestionBox />
      {/* <ResultBox /> */}
    </>
  );
}
export default App;

// quiz code 2---------------------------------------------------------.

























// quiz code 1 ---------------------------------------------------.
// This code have only 2 files {App.js ,App.css}-----------------.
/*
import React, { useState } from 'react'
import './App.css'
function App() {

  const getData = [
    {
      question: "Defense System during the Cold War was nicknamed after this famous movie.",
      options: [
        { id: 0, text: "Jaws", isCorrect: false },
        { id: 1, text: "Blade Runner", isCorrect: false },
        { id: 2, text: "Alien Fe", isCorrect: false },
        { id: 3, text: "Star Wars", isCorrect: true }
      ]
    },
    {
      question: "All of the following are names of the Seven Warring States EXCEPT:",
      options: [
        { id: 0, text: "Zhao (趙)", isCorrect: false },
        { id: 1, text: "Qin (秦)", isCorrect: false },
        { id: 2, text: "Zhai (翟)", isCorrect: true },
        { id: 3, text: "Qi (齊)", isCorrect: false }
      ]
    },
    {
      question: "When was the United States National Security Agency established?",
      options: [
        { id: 0, text: "July 26, 1908", isCorrect: false },
        { id: 1, text: "November 4, 1952", isCorrect: true },
        { id: 2, text: "July 1, 1973", isCorrect: false },
        { id: 3, text: "November 25, 2002", isCorrect: false }
      ]
    },
    {
      question: "What was Genghis Khan&#039;s real name?",
      options: [
        { id: 0, text: "Tem&uuml;jin", isCorrect: true },
        { id: 1, text: "M&ouml;ngke", isCorrect: false },
        { id: 2, text: "&uml;gedei", isCorrect: false },
        { id: 3, text: "Tem&uuml;r", isCorrect: false }
      ]
    },
    {
      question: "When did Norway become free from Sweden?",
      options: [
        { id: 0, text: "1925", isCorrect: false },
        { id: 1, text: "1905", isCorrect: true },
        { id: 2, text: "1814", isCorrect: false },
        { id: 3, text: "1834", isCorrect: false }
      ]
    },
    {
      question: "The United States Army Air Corps became the United States Air Force on what date?",
      options: [
        { id: 0, text: "December 14, 1946", isCorrect: false },
        { id: 1, text: "October 27, 1945", isCorrect: false },
        { id: 2, text: "September 18, 1947", isCorrect: true },
        { id: 3, text: "November 08, 1944", isCorrect: false }
      ]
    },
    {
      question: "In World War I, what was the name of the alliance of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria?",
      options: [
        { id: 0, text: "The Axis Powers", isCorrect: false },
        { id: 1, text: "The Federation of Empires", isCorrect: false },
        { id: 2, text: "Authoritarian Alliance", isCorrect: false },
        { id: 3, text: "The Central Powers", isCorrect: true }
      ]
    },
    {
      question: "What happened on June 6, 1944?",
      options: [
        { id: 0, text: "D-Day", isCorrect: true },
        { id: 1, text: "Atomicbombingsof Hiroshima and Nagasaki", isCorrect: false },
        { id: 2, text: "Attack on Pearl Harbor", isCorrect: false },
        { id: 3, text: "The Liberation of Paris", isCorrect: false }
      ]
    },
    {
      question: "In what year did Texas secede from Mexico?",
      options: [
        { id: 0, text: "1838", isCorrect: false },
        { id: 1, text: "1836", isCorrect: true },
        { id: 2, text: "1845", isCorrect: false },
        { id: 3, text: "1844", isCorrect: false }
      ]
    },
    {
      question: "Which of these founding fathers of the United States of America later became president?",
      options: [
        { id: 0, text: "Alexander Hamilton", isCorrect: false },
        { id: 1, text: "Samuel Adams", isCorrect: false },
        { id: 2, text: "Roger Sherman", isCorrect: false },
        { id: 3, text: "James Monroe", isCorrect: true }
      ]
    }
  ]
  console.log(getData)

  // states.
  const [showQuestion, setShowQuestion] = useState(true)
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)

  // optionClicked function.
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    if (count + 1 < getData.length) {
      setCount(count + 1);
    } else {
      setShowQuestion(false);
    }
  }

  // restart function.
  const restart = () => {
    console.log('restart call')
    setScore(0);
    setCount(0);
    setShowQuestion(true);
  }

  return (
    <>
      condition for show result & questions.......comment.
      {showQuestion ?
        // ------------------ question Container -----------------.
        <div className="main-container">
          <div className="question-container py-2 px-2">
            <h1>React Quiz</h1>
            <h3 className="mb-4">Question {count + 1} out of {getData.length}:</h3>
            question............comment.
            <h5>{getData[count].question}</h5>
            options................comment.
            {getData[count].options.map((opt, i) => {
              return (
                <li className="inputs" key={opt.id} onClick={() => optionClicked(opt.isCorrect)}>{opt.text}</li>
              )
            })}
          </div>
        </div>
        :
        // ------------------ result container --------------------.
        <div className="result-container">
          <div className="result-box py-2 px-2">
            <h1 className="text-decoration-underline">React Quiz</h1>
            <h1>Result:</h1>
            <p><b>{score} out of {getData.length}</b></p>
            <p><b>{(score / getData.length) * 100}%</b></p>
            <button className="btn btn-primary" onClick={restart}>Play Again</button>
          </div>
        </div>
      }
    </>
  );
}

export default App;
*/
// quiz code 1 ---------------------------------------------------.
