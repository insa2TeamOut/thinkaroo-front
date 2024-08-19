import {Loading} from "./Common/Loading";

export const Check = ({gptAnswer, gptAnswerApi}) => {
    return (
        <div className={"CheckZone"}>
            <div style={{marginRight: "0.5rem"}}>
                <p>정답: {gptAnswer.choice_answer_result}</p>
            </div>
            <div>
                <p>해설</p>
                {
                    gptAnswerApi === false
                        ? <div>
                            {gptAnswer.editing_result}
                        </div>
                        : <Loading/>
                }
            </div>
        </div>
    )
}