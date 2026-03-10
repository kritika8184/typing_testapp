import React, {useState, useRef} from 'react'

const CountDown = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState(targetDate-Date.now());
    const requestRef = useRef();

    const animate =()=>{

    }

    return(
        <div></div>
    )
}
export default CountDown
