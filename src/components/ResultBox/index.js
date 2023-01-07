import React from 'react'
import './resultBox.css'

function ResultBox() {
    return (
        <>
            <div className="result-container">
                <div className="result-box py-2 px-2">
                    <h1 className="text-decoration-underline">React Quiz</h1>
                    <h1>Result:</h1>
                    <p><b>4 of 25</b></p>
                    <p><b>16%</b></p>
                    <p><b>You must study much harder!</b></p>
                    <button className="btn btn-primary">Play Again</button>
                </div>
            </div>
        </>
    )
}

export default ResultBox;