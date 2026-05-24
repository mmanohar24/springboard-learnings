import "./Message.css"

function Message({ playerHealth, enemyHealth }) {

    const checkHealth = () => {
        if (playerHealth === 0 && enemyHealth === 0 ) {
            return "Draw"
        }
        else if( playerHealth === 0)
        {
            return "Mission Failed. 😣 Your spacecraft has been defeated"
        }
        else if (enemyHealth === 0) {
            return "Player 1 has won the battle"
        }
        else
        {
            return "Start Battle"
        }
    }

    return (
        <div className="Message">
            {checkHealth()}
        </div>
    )

}

export default Message;