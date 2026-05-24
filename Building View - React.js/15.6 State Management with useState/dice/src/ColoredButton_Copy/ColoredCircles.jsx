import { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);

    const addCircle = (color) => {
        setCircles(
            circles => [...circles, color]
        )
    }

    return (
        <div>
            <ColorButtons addCircle={addCircle} colorOptions={['Red', 'Green', 'Indigo', "cornflowerblue"]} />
            {

                circles.map((color, idx) => (
                    <Circle
                        key={idx}
                        color={color}
                        idx={idx}
                    />
                ))
            }

        </div>
    )
}

export default ColoredCircles