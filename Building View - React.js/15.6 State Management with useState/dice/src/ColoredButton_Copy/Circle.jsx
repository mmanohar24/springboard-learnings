import { useState } from "react"
import "./Circle.css"

function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min
}

const Circle = ({ color, idx }) => {

    const [position, setPosition] = useState({ x: getRandom(), y: getRandom() });
    const positionCircle = () => {
        setPosition({ x: getRandom(), y: getRandom() })
    }

    return (
        <div
            onClick={positionCircle}
            className="Circle"
            style={
                {
                    backgroundColor: color,
                    position: 'absolute',
                    top: `${position.y}vh`,
                    left: `${position.x}vw`
                }
            }>
            {
                idx
            }
        </div>
    )
}

export default Circle