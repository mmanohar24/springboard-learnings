import "./Card.css"

function Card({ image, code }) {
    return (
        <div className="Card">
            <img
                className="Card-image"
                src={image}
                alt={code}
            />
        </div>
    )
}

export default Card