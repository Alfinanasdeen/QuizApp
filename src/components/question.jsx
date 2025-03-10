function Question({ questionList, onSelectedAnswer, selectedIndex }) {
    return (
        <div className="question">
            <h2>{questionList.NO}.{questionList.question}</h2>
            <ul className="option">
                {questionList.answerOptions.map((option, index) => (
                    <li key={index}>
                        <button
                            className={selectedIndex === index ? "selected" : ""}
                            onClick={() => onSelectedAnswer(index, option.isCorrect)}
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
