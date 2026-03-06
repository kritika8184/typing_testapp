import {useState, useEffect, useRef} from "react";
import Restartlogo from "../assets/images/icon-restart.svg";

const TypingSpace = ({text, mode}) => {
    const [userInput, setUserInput] = useState("");
    const textareaRef =useRef(null);

    const handleChange = (e) => {
        if(e.target.value.length>text.length) return;
        setUserInput(e.target.value)
    };
    const handleReset =() =>{
        setUserInput("")
    }
    return (
        <>
            {text ? (
                <>
                    <div className="w-full cursor-text"
                         onClick={() => textareaRef.current.focus()}
                    >
                        {text.split("").map((char, index) => {
                            let color = "text-white-400"
                            let displayChar = char;
                            if (index === userInput.length) {
                                color += " bg-gray-600";
                            }
                            if (index < userInput.length) {
                                if(userInput[index] === char) {
                                    color="text-green-500"
                                    displayChar = char;
                                } else{
                                    color="text-red-500 underline"
                                    displayChar = userInput[index];
                                }
                            }
                            return (
                                <span key={index} className={color}>{displayChar}</span>
                            )
                        })}</div>
                    <textarea
                        ref={textareaRef}
                        className="m-4 opacity-0 absolute"
                        rows="4"
                        value={userInput}
                        onChange={handleChange}
                        autoFocus
                    />
                </>
            ) : (
                <>Please select the typing difficulty</>
            )}
            <div className="flex justify-center items-end absolute bottom-2 right-[50%]">
                <button className="flex items-center border-2 gap-2 hover:cursor-pointer hover:bg-blue-500 rounded-md p-2" onClick={handleReset}>
                    Restart Test
                    <img src={Restartlogo} alt={"Restart-button"}/>
                </button>
            </div>
        </>
    )
}
export default TypingSpace;