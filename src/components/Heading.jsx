import {useState} from 'react';
import TypingSpace from "./TypingSpace.jsx";
const Heading =()=>{

    const [difficulty, setDifficulty] = useState("");
    const [mode, setMode] = useState("");

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
            <TypingSpace difficulty={difficulty} mode={mode}/>
        </>
    )
}
export default Heading;