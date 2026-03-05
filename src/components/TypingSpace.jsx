import data from "../../data.js";

const TypingSpace=({difficulty, mode})=>{
    return(
        <>
            <div className="mt-4">
                {data.easy[0].text}
            </div>
        </>
    )
}
export default TypingSpace;