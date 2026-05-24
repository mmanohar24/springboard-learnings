function HealthDisplay({ name, health, className }) {
    const getHealthEmoji = (currentHealth) => {
        if (currentHealth === 100) return "❤️"
        if (currentHealth === 0) return "💀"

        return "❤️‍🩹";
    }

    return (
        <h3 className={className}>
            {name} Health: {health} {getHealthEmoji(health)}
        </h3>
    )
}

export default HealthDisplay;