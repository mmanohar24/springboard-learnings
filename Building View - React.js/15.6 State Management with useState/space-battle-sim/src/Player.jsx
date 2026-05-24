import { useState } from "react";
import HealthDisplay from "./HealthDisplay";
import Message from "./Message";
import "./Player.css"

function Player({ maxDamage = 20 }) {

    const [health, setHealth] = useState({
        playerHealth: 100,
        enemyHealth: 100
    });

    const handleHealth = () => {
        const randomPlayerHealth = Math.floor(Math.random() * maxDamage);
        const randomEnemyHealth = Math.floor(Math.random() * maxDamage);

        const newPlayerHealth = Math.max(0, health.playerHealth - randomPlayerHealth);
        const newEnemyHealth = Math.max(0, health.enemyHealth - randomEnemyHealth);

        setHealth({
            playerHealth: newPlayerHealth,
            enemyHealth: newEnemyHealth
        });
    }

    const resetGame = () => {

        setHealth(
            {
                playerHealth: 100,
                enemyHealth: 100
            }
        )
    }

    return (
        <div className="Player">

            <h1> Space Battle Simulator </h1>

            <div className="Player-info">
                <HealthDisplay
                    className="Player-playerHealth"
                    name={"Player 1"}
                    health={health.playerHealth} />

                <button
                    onClick={health.playerHealth === 0 || health.enemyHealth === 0 ? resetGame : handleHealth}
                    className="Player-fireBtn"
                >
                    {
                        health.playerHealth === 0 || health.enemyHealth === 0 ? "Restart" : "Fire"
                    }
                </button>

                <HealthDisplay
                    className="Player-enemyHealth"
                    name={"Enemy"}
                    health={health.enemyHealth} />


                {
                    <Message
                        playerHealth={health.playerHealth}
                        enemyHealth={health.enemyHealth}
                    />
                }

            </div>



        </div>
    )
}


export default Player