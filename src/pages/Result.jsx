import React from 'react'

const Result = ({ user, score }) => {
    return (
        <div>
            <h1>quizz completed!</h1>
            <h2>
                Hello<span style={{
                    textTransform:"uppercase"
                }}>
                    {user}</span> ,your score is{score}
            </h2>
            <button><a href="/">back to home</a></button>
        </div>
    )
}

export default Result