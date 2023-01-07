import React from 'react'
import './startBox.css'

function StartBox() {
    return (
        <>
            <div className="main-box">
                <div className="text-box py-2 px-2 mb-5">
                    <h2>Test</h2>
                    <p>The test contains 10 questions and there is no time limit.</p>
                    <p>The test is not official, it's just a nice way to see how much you know, or don't know, about React.</p>
                    <h2>Count Your Score</h2>
                    <p>You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 10 points.</p>
                    <p className="s-para">Start the Quiz Good luck!</p>
                </div>
                <button className="start-btn btn btn-primary btn-lg">Start Quiz</button>
            </div>
        </>
    )
}

export default StartBox;