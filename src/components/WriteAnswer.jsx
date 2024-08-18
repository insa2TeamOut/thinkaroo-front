import {useEffect, useRef, useState} from "react";
import * as fabric from "fabric";
import {ButtonCompo} from "./WriteCompo/ButtonCompo";

export const WriteAnswer = ({checkingAnswer}) => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [activeTool, setActiveTool] = useState("select");

    let screenWidth = window.innerWidth;

    useEffect(() => {
        const newCanvas = new fabric.Canvas(canvasRef.current, {
            width: screenWidth,
            height: 400,
        });
        setCanvas(newCanvas);
        return () => {
            newCanvas.dispose();
        };
    }, []);

    useEffect(() => {
        if (!canvas) return;

        switch (activeTool) {
            case "select":
                handleSelectTool();
                break;

            case "pen":
                handlePenTool();
                break;

            case "eraser":
                handleEraserTool();
                break;

            default:
                break;
        }
    }, [canvas, activeTool]);

    const handleSelectTool = () => {
        if (canvas) {
            canvas.isDrawingMode = false;
        }
    };

    const handlePenTool = () => {
        if (canvas) {
            canvas.isDrawingMode = true;
            if (canvas.freeDrawingBrush) {
                canvas.freeDrawingBrush.color = "black";
                canvas.freeDrawingBrush.width = 3;
            } else {
                canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
                canvas.freeDrawingBrush.color = "black";
                canvas.freeDrawingBrush.width = 3;
            }
        }
    };

    const handleEraserTool = () => {
        if (canvas) {
            canvas.isDrawingMode = true;
            if (canvas.freeDrawingBrush) {
                canvas.freeDrawingBrush.color = "white";
                canvas.freeDrawingBrush.width = 7;
            } else {
                canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
                canvas.freeDrawingBrush.color = "white";
                canvas.freeDrawingBrush.width = 7;
            }
        }
    };

    const handleClearCanvas = () => {
        if (canvas) {
            canvas.clear();
        }
    };

    const handleCheckAnswer = async () => {
        if (canvas) {
            const imageDataUrl = canvas.toDataURL('image/jpg');

            checkingAnswer(imageDataUrl)

        }else console.log("none")
    };

    return (
        <div className={"WriteZone"}>
            <canvas className={"write"} ref={canvasRef}/>
            <ButtonCompo
                setActiveTool={setActiveTool}
                activeTool={activeTool}
                handleClearCanvas={handleClearCanvas}
                handleCheckAnswer={handleCheckAnswer}
            />
        </div>
    );
}
