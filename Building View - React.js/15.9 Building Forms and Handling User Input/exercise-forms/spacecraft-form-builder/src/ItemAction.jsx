import "./ItemAction.css"

function ItemAction({ onDelete }) {
    return (
        <div className="ItemAction">
            <button
                onClick={onDelete}
                className="ItemAction-btn"
            > Delete </button>
        </div>
    )
}

export default ItemAction