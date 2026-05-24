import { useEffect, useRef, useState } from "react";

// function Timer() {

//     const [seconds, setSeconds] = useState(0);

//     useEffect(
//         () => {
//             const intervalId = setInterval(
//                 () => {
//                     setSeconds(seconds => seconds + 1)
//                 }, 1000)

//             return () => {
//                 clearInterval(intervalId);
//             }
//         }, []
//     )

//     return (
//         <div>
//             <h2> This is Timer Component: {seconds} </h2>

//         </div>
//     )
// }


function Timer2() {

    const [seconds, setSeconds] = useState(0);
    const timerId = useRef();

    const stopTimer = () => {
        clearInterval(timerId.current)
    }

    useEffect(
        () => {
            timerId.current = setInterval(
                () => {
                    setSeconds(seconds => seconds + 1)
                }, 1000)

            return () => {
                clearInterval(timerId.current);
            }
        }, []
    )

    return (
        <div>
            <h2> {seconds} </h2>
            <button onClick={stopTimer}> Stop </button>
        </div>
    )
}

// export default Timer;
export default Timer2;