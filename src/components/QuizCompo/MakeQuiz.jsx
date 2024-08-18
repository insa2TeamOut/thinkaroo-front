import {Button, TextField} from "@mui/material";

export const MakeQuiz = ({userInput, setUserInput, gptQuizFunction}) => {
    return (
        <div className={"makeQuizZone"}>
            <TextField
                required
                id="standard-required"
                label="과목"
                variant="standard"
                size="small"
                onKeyUp={(e) => {
                    setUserInput((prevInput) => ({
                        ...prevInput,
                        subject: e.target.value
                    }));
                }}
            />

            <TextField
                required
                id="standard-required"
                label="수준"
                variant="standard"
                size="small"
                onKeyUp={(e) => {
                    setUserInput((prevInput) => ({
                        ...prevInput,
                        level: e.target.value
                    }));
                }}
            />
            <TextField
                required
                id="standard-required"
                label="개념"
                variant="standard"
                size="small"
                onKeyUp={(e) => {
                    setUserInput((prevInput) => ({
                        ...prevInput,
                        content: e.target.value
                    }));
                }}
            />

            <Button
                size="small"
                variant="contained" color="success"
                style={{borderRadius: "0px"}}
                onClick={() => {
                    gptQuizFunction(userInput.level, userInput.subject, userInput.content)
                }}
            >문제 생성</Button>
        </div>
    )
}