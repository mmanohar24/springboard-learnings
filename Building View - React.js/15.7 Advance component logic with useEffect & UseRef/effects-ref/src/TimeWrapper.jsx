import { useState } from "react";
// import Timer from "./Timer";
import Timer2 from "./Timer";

function TimeWrapper() {

    const [timerVisible, setTimerVisible] = useState(true);

    const toggleTime = () => {
        setTimerVisible(!timerVisible);
    }

    return (
        <div>
            <button onClick={toggleTime}> Toggle Timer </button>
            {
                timerVisible && <Timer2 />
            }
        </div>
    )
}

export default TimeWrapper;