import {Button} from "@mui/material";

export const ButtonCompo = (
    {setActiveTool, activeTool, handleClearCanvas,handleCheckAnswer}
) => {
    return (
        <div style={{
            backgroundColor: '#F5F5DC'
        }}>
            <Button
                style={{height: "48px", border: "1px solid black"}}
                onClick={() => setActiveTool("select")}
                variant="contained" color="success"
                disabled={activeTool === "select"}
            >
                선택
            </Button>
            <Button
                style={{height: "48px", border: "1px solid black"}}
                onClick={() => setActiveTool("pen")}
                variant="contained" color="success"
                disabled={activeTool === "pen"}
            >
                펜
            </Button>
            <Button
                style={{height: "48px", border: "1px solid black"}}
                onClick={() => setActiveTool("eraser")}
                variant="contained" color="success"
                disabled={activeTool === "eraser"}
            >
                지우개
            </Button>
            <Button
                style={{height: "48px", border: "1px solid black"}}
                variant="contained" color="error"
                onClick={handleClearCanvas}
            >
                초기화
            </Button>
            <Button
                style={{height: "48px", border: "1px solid black"}}
                variant="contained"
                onClick={handleCheckAnswer}
            >
                채점
            </Button>
        </div>
    )
}