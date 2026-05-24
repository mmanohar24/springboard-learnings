function App() {
    const spacePhenomena = [
        { id: 1, name: "Asteroid Belt", emoji: "☄️" },
        { id: 2, name: "Galactic Nebula", emoji: "🌌" },
        { id: 3, name: "Black Hole", emoji: "🕳️" },
        { id: 4, name: "Supernova Explosion", emoji: "💥" },
        { id: 5, name: "Pulsar", emoji: "⚡" },
        { id: 6, name: "Quasar", emoji: "💫" },
        { id: 7, name: "Exoplanet", emoji: "🪐" },
        { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
        { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
        { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" }
    ];

    const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

    return (
        <div>
            <h1> Space Phenomena Tracker </h1>

            <ul>
                {
                    spacePhenomena.map(phenomena => {
                        const status = observationStatuses[Math.floor(Math.random() * observationStatuses.length)]
                        return (
                            <li key={phenomena.id}>
                                {/* {phenomena.emoji} {phenomena.name} - {status} {status === "🚀 Prime for Study" && (<span> <b> Exciting! Bring your advanced equipment!</b></span>)} */}

                                {phenomena.emoji} {phenomena.name} - {status} {status === "🚀 Prime for Study" ? (<span> <b> 💡 Gear up with your best equipment!!</b></span> ):''}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);