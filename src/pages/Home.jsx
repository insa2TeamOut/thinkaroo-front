import {Header} from "../components/Header";
import {Quiz} from "../components/Quiz";
import {WriteAnswer} from "../components/WriteAnswer";
import "../css/Common.scss"
import {Check} from "../components/Check";
import {useQuiz} from "../hook/useQuiz";

export const Home = () => {

    const {
        userInput, setUserInput,
        gptQuiz, setGptQuiz, gptQuizApi,
        gptAnswer, setGptAnswer,
        gptAnswerApi, setGptAnswerApi,
        gptQuizFunction,
        checkingAnswer
    } = useQuiz();

    return (
        <div>
            <Header/>

            <Quiz
                setUserInput={setUserInput}
                userInput={userInput}
                gptQuizFunction={gptQuizFunction}
                gptQuiz={gptQuiz}
                gptQuizApi={gptQuizApi}
            />

            <WriteAnswer
                checkingAnswer={checkingAnswer}
            />
            <Check
                gptAnswer={gptAnswer}
                gptAnswerApi={gptAnswerApi}
            />
        </div>
    )
}