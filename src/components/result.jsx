function Result({ userAnswer, questionList, resetQuiz = () => { } }) {

    const correctedAnswer = userAnswer.filter((answer) => answer).length

    return (
        <div className="results">
            <h2>Result</h2>
            <p>
                You Answered {correctedAnswer} out of {questionList.length} questions
                <span onClick={resetQuiz}>Click here to retry</span>
            </p>
            <ul>
                {questionList.map((question, index) => {
                    return (
                        <li key={index} data-correct={userAnswer[index]}>
                            Q{index + 1}.{question.question}
                            <b>
                                {userAnswer[index]
                                    ? ""
                                    : `- ${question.answerOptions.find((ans) => ans.isCorrect).text
                                    }`}
                            </b>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Result