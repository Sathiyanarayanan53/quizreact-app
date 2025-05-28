import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const questions = [{
    question: "what is css Stands for ",
    options: ["Casecading Style Sheet", "sheet", "css"],
    answer: "Casecading Style Sheet",
},
{
    question: "what is react?",
    options: ["library", "Framework", "object"],
    answer: "library",
},
{
    question: "who is founder/inverted of react?",
    options: ["Twitter", "FaceBook", "Instagram"],
    answer: "Facebook",
},
];
const Quiz = ({ setScore }) => {
    const [questionsIdx, setquestionIdx] = useState(0);
    const navigator = useNavigate();

    const handleAnswer = (SelectedAns) => {
        const isCorrect = SelectedAns == questions[questionsIdx].answer;
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        if (questionsIdx < questions.length - 1) {
            setquestionIdx((prevIdx) => prevIdx + 1);
        } else {
            navigator("/result")
        }

    };
    return (
        <div>
            <h2>{questionsIdx + 1}. {questions[questionsIdx].question}</h2>
            {questions[questionsIdx].options.map((option, idx) => (
                <button key={idx} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
            <br />
            <br />
            <a href="/home"> <button>Back to Home </button> </a>
        </div >
    )
}

export default Quiz