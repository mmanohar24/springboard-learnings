import { useEffect, useState } from "react";

function UseEffect_Learning() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.count("UseEffect Rendered!!")
    }, [number])

    console.count("Component Rendered!!")

    const handleClick = () => {
        setNumber(prev => prev + 1);
    }


    return (
        <div>
            <h1> You clicked {number} </h1>

            <button onClick={handleClick}> Increase Click Count </button>

        </div>
    )
}

export default UseEffect_Learning;