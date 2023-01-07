import React, { useState } from 'react'
import './questionBox.css'

function QuestionBox() {

    const getData = [
        {
            question: "Defense System during the Cold War was nicknamed after this famous movie.",
            correct_answer: "Star Wars",
            options: [
                "Jaws",
                "Blade Runner",
                "Alien",
                "Star Wars"
            ]
        },
        {
            question: "All of the following are names of the Seven Warring States EXCEPT:",
            correct_answer: "Zhai (翟)",
            options: [
                "Zhao (趙)",
                "Qin (秦)",
                "Zhai (翟)",
                "Qi (齊)"
            ]
        },
        {
            question: "When was the United States National Security Agency established?",
            correct_answer: "November 4, 1952",
            options: [
                "July 26, 1908",
                "November 4, 1952",
                " July 1, 1973",
                " November 25, 2002"
            ]
        },
        {
            question: "What was Genghis Khan&#039;s real name?",
            correct_answer: "Tem&uuml;jin",
            options: [
                "Tem&uuml;jin",
                "M&ouml;ngke",
                "&uml;gedei",
                "Tem&uuml;r"
            ]
        },
        {
            question: "When did Norway become free from Sweden?",
            correct_answer: "1905",
            options: [
                "1925",
                "1905",
                "1814",
                "1834"
            ]
        },
        {
            question: "The United States Army Air Corps became the United States Air Force on what date?",
            correct_answer: "September 18, 1947",
            options: [
                "December 14, 1946",
                "October 27, 1945",
                "September 18, 1947",
                "November 08, 1944"
            ]
        },
        {
            question: "In World War I, what was the name of the alliance of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria?",
            correct_answer: "The Central Powers",
            options: [
                "The Axis Powers",
                "The Federation of Empires",
                "Authoritarian Alliance",
                "The Central Powers"
            ]
        },
        {
            question: "What happened on June 6, 1944?",
            correct_answer: "D-Day",
            options: [
                "D-Day",
                "Atomicbombingsof Hiroshima and Nagasaki",
                "Attack on Pearl Harbor",
                "The Liberation of Paris"
            ]
        },
        {
            question: "In what year did Texas secede from Mexico?",
            correct_answer: "1836",
            options: [
                "1838",
                "1836",
                "1845",
                "1844"
            ]
        },
        {
            question: "Which of these founding fathers of the United States of America later became president?",
            correct_answer: "James Monroe",
            options: [
                "Alexander Hamilton",
                "Samuel Adams",
                "Roger Sherman",
                "James Monroe"
            ]
        }
    ]
    console.log(getData)

    // states.
    const [count, setCount] = useState(0)

    // nextQuestion function.
    const nextQuestion = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div className="main-container">
                <div className="question-container py-2 px-2">
                    <h1>React Quiz</h1>
                    <h3 className="mb-4">Question {count + 1} of 10:</h3>
                    <h5>{getData[count].question}</h5>
                    {getData[count].options.map((opt, i) => {
                        return (
                            <div className="options">
                                <input type="radio" name="answer" className="mx-2 inputs" />
                                <label>{opt}</label>
                            </div>
                        )
                    })}
                    <button className="next-btn btn btn-success" onClick={() => { nextQuestion() }}>Next</button>
                </div>
            </div>
        </>
    )
}

export default QuestionBox;






































// previous code--------------------------------------------------------------.
/*
// import React, { useState } from 'react'
// import './questionBox.css'

// function QuestionBox() {

//   const getData = [
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "Defense System during the Cold War was nicknamed after this famous movie.",
//       correct_answer: "Star Wars",
//       incorrect_answers: [
//         "Jaws",
//         "Blade Runner",
//         "Alien"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "All of the following are names of the Seven Warring States EXCEPT:",
//       correct_answer: "Zhai (翟)",
//       incorrect_answers: [
//         "Zhao (趙)",
//         "Qin (秦)",
//         "Qi (齊)"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "When was the United States National Security Agency established?",
//       correct_answer: "November 4, 1952",
//       incorrect_answers: [
//         "July 26, 1908",
//         " July 1, 1973",
//         " November 25, 2002"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "What was Genghis Khan&#039;s real name?",
//       "correct_answer": "Tem&uuml;jin",
//       incorrect_answers: [
//         "M&ouml;ngke",
//         "&uml;gedei",
//         "Tem&uuml;r"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "When did Norway become free from Sweden?",
//       "correct_answer": "1905",
//       incorrect_answers: [
//         "1925",
//         1814,
//         "1834"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "The United States Army Air Corps became the United States Air Force on what date?",
//       correct_answer: "September 18, 1947",
//       incorrect_answers: [
//         "December 14, 1946",
//         "October 27, 1945",
//         "November 08, 1944"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "In World War I, what was the name of the alliance of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria?",
//       correct_answer: "The Central Powers",
//       incorrect_answers: [
//         "The Axis Powers",
//         "The Federation of Empires",
//         "Authoritarian Alliance"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "What happened on June 6, 1944?",
//       "correct_answer": "D-Day",
//       incorrect_answers: [
//         "Atomicbombingsof Hiroshima and Nagasaki",
//         "Attack on Pearl Harbor",
//         "The Liberation of Paris"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "In what year did Texas secede from Mexico?",
//       "correct_answer": "1836",
//       incorrect_answers: [
//         "1838",
//         1845,
//         "1844"
//       ]
//     },
//     {
//       category: "History",
//       type: "multiple",
//       difficulty: "medium",
//       question: "Which of these founding fathers of the United States of America later became president?",
//       correct_answer: "James Monroe",
//       incorrect_answers: [
//         "Alexander Hamilton",
//         "Samuel Adams",
//         "Roger Sherman"
//       ]
//     }
//   ]
//   console.log(getData)

//   // states.
//   const [count, setCount] = useState(0)

//   // nextQuestion function.
//   const nextQuestion = () => {
//     setCount(count + 1)
//   }


//   return (
//     <>

//       <div className="main-container">
//         <div className="question-container py-2 px-2">
//           <h1>React Quiz</h1>
//           <h3 className="mb-4">Question {count + 1} of 10:</h3>
//           <h5>{getData[count].question}</h5>
//           <div className="options">
//             <input type="radio" name="answer" className="mx-2 inputs" id="option1" />
//             <label htmlFor="option1">{getData[0].incorrect_answers[0]}</label>
//           </div>
//           <div className="options">
//             <input type="radio" name="answer" className="mx-2 inputs" id="option2" />
//             <label htmlFor="option2">{getData[0].incorrect_answers[1]}</label>
//           </div>
//           <div className="options">
//             <input type="radio" name="answer" className="mx-2 inputs" id="option3" />
//             <label htmlFor="option3">{getData[0].correct_answer}</label>
//           </div>
//           <div className="options">
//             <input type="radio" name="answer" className="mx-2 inputs" id="option4" />
//             <label htmlFor="option4">{getData[0].incorrect_answers[2]}</label>
//           </div>
//           <button className="next-btn btn btn-success" onClick={() => { nextQuestion() }}>Next</button>
//         </div>
//       </div>

//     </>
//   )
// }

// export default QuestionBox;
*/
// previous code--------------------------------------------------------------.
