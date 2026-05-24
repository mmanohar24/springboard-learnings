import "./ColorButtons.css"

const ColorButton = ({ color, addCircle }) => {
    return (
        <button
            className="ColorButton-btn"
            onClick={() => addCircle(color)}
            style={{ backgroundColor: color }}
        >
            {color}
        </button>
    ) 
}

export default ColorButton