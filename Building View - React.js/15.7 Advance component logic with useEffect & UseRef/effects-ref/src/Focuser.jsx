import { useRef } from "react";

function Focuser() {

    const focusRef = useRef();
    const handleMoveFocus = () => {
        focusRef.current.focus();
    }

    return (
        <div>

            <h3> Focus starts here </h3>
            <input type="text" autoFocus />
            <button onClick={handleMoveFocus}> Focus the next text input </button>

            <h3> Then moves here </h3>
            <input type="text" ref={focusRef} />


        </div>
    )
}

export default Focuser;