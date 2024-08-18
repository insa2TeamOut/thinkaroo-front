export const Check = ({gptAnswer, gptAnswerApi}) => {
    return (
        <div className={"CheckZone"}>
            <div style={{marginRight:"0.5rem"}}>
                <p>정답: {gptAnswer.editing_result}</p>
            </div>
            <div>
                <p>해설</p>
                <div>
                    {gptAnswer.choice_answer_result}
                </div>
            </div>
        </div>
    )
}