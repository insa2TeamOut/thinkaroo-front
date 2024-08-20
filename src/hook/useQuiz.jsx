import {useState} from "react";
import axios from "axios";

export const useQuiz = () => {

    const [userInput, setUserInput] = useState({
        subject: "",
        level: "",
        content: ""
    });

    const [gptQuiz, setGptQuiz] = useState("");
    const [gptQuizApi, setGptQuizApi] = useState(false);

    const [gptAnswer, setGptAnswer] = useState({
        choice_answer_result: "",
        editing_result: "",
        filename: ""
    });
    const [gptAnswerApi, setGptAnswerApi] = useState(false);

    const client = axios.create({
        baseURL: "http://192.168.0.122:8000",
        // baseURL: "http://127.0.0.1:8000",
        // baseURL: "http://0.0.0.0:8000",
        timeout: 60000000000000000
    })

    const gptQuizFunction = async (difficulty, subject, content) => {
        const formData = new FormData();
        formData.append("difficulty", difficulty);
        formData.append("subject", subject);
        formData.append("content", content);

        setGptQuizApi(true);

        try {

            const response = await client.post("make_quiz.openai.azure.com", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log(response.data);
            setGptQuiz(response.data);
        } catch (error) {
            console.log(error);
            if (userInput.subject === "" || userInput.level === "" || userInput.content) {
                setGptQuiz("필수 요소를 채워주세요.");
            } else setGptQuiz("다시 버튼을 눌러 주세요.");
        }

        setGptQuizApi(false);
    }


    const checkingAnswer = async (file) => {
        setGptAnswerApi(true);
        setGptAnswer({
            choice_answer_result: "",
            editing_result: "",
            filename: ""
        });

        const formData = new FormData();
        formData.append("file", file);
        formData.append("text", gptQuiz);
        formData.append("difficulty", userInput.level);

        try {
            const response = await client.post("/check_answer.openai.azure.com/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // console.log(response.data);
            setGptAnswer(response.data);
        } catch (error) {
            // console.log(error.response.data);
            setGptAnswer({
                choice_answer_result: "다시 채점버튼을 눌러주세요.",
                editing_result: "X",
                filename: ""
            });
        }

        setGptAnswerApi(false);
    }

    return {
        userInput, setUserInput,
        gptQuiz, setGptQuiz, gptQuizApi,
        gptQuizFunction,
        checkingAnswer,
        gptAnswer, setGptAnswer,
        gptAnswerApi, setGptAnswerApi
    }
}