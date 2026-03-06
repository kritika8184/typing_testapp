import {useState, useEffect} from 'react';
import TypingSpace from "./TypingSpace.jsx";
import data from "../../data.js";
const Heading =()=>{

    const [difficulty, setDifficulty] = useState("");
    const [mode, setMode] = useState("");
    const [text, setText] = useState("");
    const [indexValue, setIndexValue] = useState(0);

    useEffect(()=>{
        setIndexValue(randomNumber(0,9));
        setText((data[difficulty.toLowerCase()] && data[difficulty.toLowerCase()][indexValue])?data[difficulty.toLowerCase()][indexValue].text : null);
    }, [difficulty]);
    const handleDifficultyChange=(e)=>(setDifficulty(e.target.value));

    const handleModeChange=(e)=> (setMode(e.target.value));
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
            <TypingSpace text={text} mode={mode}/>
        </>
    )
}
export default Heading;

const randomNumber=(min, max)=> {
    return Math.floor(Math.random() * (max - min + 1) + min);
}