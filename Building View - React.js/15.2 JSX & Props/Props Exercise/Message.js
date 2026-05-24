function Message(props) {
    return (
        <div>

            {props.quantity < 5 ? <span> ⚠️ Low Stock {props.quantity} remained. </span> : null}
            {(props.quantity * props.price) > 1000 ? <p><b> 💰High Value - consider extra protection </b> </p> : ''}

        </div>
    );
}
