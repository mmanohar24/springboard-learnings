import "./NumberItem.css"

const NumberItem = ({ number, remove }) => {

    const handleRemove = () => {
        remove(number)
    }
    return (
        <li className="NumberItem">
            <button onClick={handleRemove}> {number} </button>
        </li>
    )
}

export default NumberItem