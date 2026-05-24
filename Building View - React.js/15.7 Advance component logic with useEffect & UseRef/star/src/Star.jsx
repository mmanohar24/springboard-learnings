import { useEffect, useRef } from "react";
import "./Star.css"

function Star({ id, x, y, destroyStar }) {

    const starRef = useRef();

    useEffect(
        () => {
            starRef.current.focus()
        }, []
    )

    return (
        <div
        className="Star"
            tabIndex="0"
            ref={starRef}
            onClick={() => destroyStar(id)}
            style={
                {
                    position: 'absolute',
                    left: x,
                    top: y
                }
            }
        >
            {/* <h2> ⭐️ </h2> */}
        </div>
    )
}

export default Star;