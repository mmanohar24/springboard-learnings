import GreatGrandChild from "./GreatGrandChild";
import "./GrandChild.css"

function GrandChild() {
    return (
        <div
            className="GrandChild"
            style={
                {
                    border: '4px solid green',
                    margin: '1rem',
                    borderRadius: '5px'
                }
            }
        >
            <p> This is Grand Child Component</p>

            <GreatGrandChild />
        </div>
    )
}

export default GrandChild;