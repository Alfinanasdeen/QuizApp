import { useState, useEffect } from "react";

function Question({ questionList, onSelectedAnswer }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        // Reset selected index whenever a new question is loaded
        setSelectedIndex(null);
    }, [questionList]);

    const handleClick = (index, isCorrect) => {
        setSelectedIndex(index);
        onSelectedAnswer(isCorrect);
    };

    return (
        <div className="question">
            <h2>{questionList.NO}.{questionList.question}</h2>
            <ul className="option">
                {questionList.answerOptions.map((option, index) => (
                    <li key={index}>
                        <button
                            className={selectedIndex === index ? "selected" : ""}
                            onClick={() => handleClick(index, option.isCorrect)}
                        >
                            {option.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Question;
