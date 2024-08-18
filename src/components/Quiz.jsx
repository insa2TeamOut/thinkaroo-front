import {MakeQuiz} from "./QuizCompo/MakeQuiz";
import {ShowQuiz} from "./QuizCompo/ShowQuiz";

export const Quiz = ({userInput, setUserInput, gptQuizFunction, gptQuiz, gptQuizApi}) => {
    return (
        <div className={"QuizZone"} onClick={() => {
            console.log(JSON.stringify(userInput, null, 2));
            // console.log(userInput)
        }}>
            <MakeQuiz
                userInput={userInput}
                setUserInput={setUserInput}
                gptQuizFunction={gptQuizFunction}
            />
            <ShowQuiz
                gptQuiz={gptQuiz}
                gptQuizApi={gptQuizApi}
            />
        </div>
    )
}