import {useState, useEffect} from 'react';
import TypingSpace from "./TypingSpace.jsx";
import data from "../../data.js";
import Restartlogo from "../assets/images/icon-restart.svg";
const Heading =()=>{
    const targetTime =  1*60*1000;
    const [difficulty, setDifficulty] = useState("Easy");
    const [mode, setMode] = useState("timed");
    const [text, setText] = useState("");
    const [indexValue, setIndexValue] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [restart, setRestart] = useState();


    useEffect(()=>{
        // setIndexValue(randomNumber(0,9));
        setText((data[difficulty.toLowerCase()] && data[difficulty.toLowerCase()][indexValue])?data[difficulty.toLowerCase()][indexValue].text : null);
    }, [difficulty, indexValue]);
    const handleDifficultyChange=(e)=>(setDifficulty(e.target.value));

    const handleModeChange=(e)=> (setMode(e.target.value));

    const handleReset =() =>{
        setIndexValue(randomNumber(0,9));
        setUserInput("");
    }

    const countDown =(timerMin)=>{
        const diff = targetTime - Date.now();

        if(diff<=0){
            setTimeLeft(0);
            cancelAnimationFrame(requestRef.current);
            return;
        }
        setTimeLeft(diff);
        requestRef.current = requestAnimationFrame
    }
    return(
        <>
            <header className="flex m-4 justify-between text-xs">
                <div className="">
                    WPM:
                    <span>N/A|</span>
                </div>
                <div className="">Accuracy:   <span>N/A|</span></div>
                <div className="">Time:   <span>N/A|</span></div>
                <div className="flex justify-evenly">Difficulty:
                    <button className={`navButton ${difficulty==="Easy"?"active":""}`}
                        onClick={handleDifficultyChange} value="Easy">Easy</button>
                    <button className={`navButton ${difficulty==="Medium"?"active":""}`} onClick={handleDifficultyChange} value="Medium">Medium</button>
                    <button className={`navButton ${difficulty==="Hard"?"active":""}`} onClick={handleDifficultyChange} value="Hard">Hard</button>
                </div>
                <div className="flex justify-evenly">Mode:
                    <button className={`navButton ${mode==="timed"?"active":""}`}
                    onClick={handleModeChange} value={"timed"}>Timed(60s)</button>
                    <button className={`navButton ${mode==="passage"?"active":""}`}
                    onClick={handleModeChange} value={"passage"}>Passage</button>
                </div>
            </header>
            <hr className=""/>
                <div className="fixed bottom-2 right-1/2">
                    <button className="flex items-center border-2 gap-2 hover:cursor-pointer hover:bg-blue-500 rounded-md p-2 text-xs" onClick={handleReset}>
                        Restart Test
                        <img src={Restartlogo} alt={"Restart-button"} className="w-4 h-4"/>
                    </button>
            </div>
            <TypingSpace text={text} mode={mode} userInput={userInput} setUserInput={setUserInput}/>
        </>
    )
}
export default Heading;

const randomNumber=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1) + min);
}