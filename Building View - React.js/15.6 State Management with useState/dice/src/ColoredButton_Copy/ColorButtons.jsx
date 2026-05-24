import "./ColorButtons.css"
import ColorButton from "./ColorButton"

const ColorButtons = ({ colorOptions, addCircle }) => {
    return (
        <div className="ColorButtons">
            {
                colorOptions.map(
                    color => (
                        <ColorButton color={color} addCircle={addCircle} />
                    )
                )
            }
        </div>
    )
}

export default ColorButtons