import {useState, useEffect, useRef} from "react";
import Restartlogo from "../assets/images/icon-restart.svg";

const TypingSpace = ({text, mode}) => {
    const [userInput, setUserInput] = useState("");
    const [getStarted, setGetStarted] = useState(false);
    const textareaRef =useRef(null);

    const handleChange = (e) => {
        if(e.target.value.length>text.length) return;
        setUserInput(e.target.value)
    };

    return (
        <>
            {text && (
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
            )}
            {!getStarted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
                    <div className={"flex flex-col items-center gap-4"}>
                    <button
                        className="rounded-md bg-blue-500 text-white px-5 py-3 text-sm hover:bg-blue-600"
                        onClick={() => setGetStarted(true)}
                    >
                        Start Typing Test
                    </button>
                        <p className="text-gray-300 text-sm">
                            Or click the text and start typing
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
export default TypingSpace;