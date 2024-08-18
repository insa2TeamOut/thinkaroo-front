import {Loading} from "../Common/Loading";

export const ShowQuiz = ({gptQuiz, gptQuizApi}) => {
    return (
        <div className={"showQuizZone"}>
            {gptQuizApi === false ? gptQuiz : <Loading/>}
        </div>
    )
}