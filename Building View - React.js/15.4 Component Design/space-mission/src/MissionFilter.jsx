import "./MissionFilter.css";

function MissionFilter({ currentFilter, setFilter }) {
    return (
        <div className="MissionFilter">

            <button
                className={currentFilter === "All" ? 'active' : ''}
                onClick={() => setFilter('All')}>
                All
            </button>

            <button
                className={currentFilter === "Planned" ? 'active' : ''}
                onClick={() => setFilter('Planned')}>
                Planned
            </button>

            <button
                className={currentFilter === "Active" ? 'active' : ''}
                onClick={() => setFilter('Active')}>
                Active
            </button>

            <button
                className={currentFilter === "Completed" ? 'active' : ''}
                onClick={() => setFilter('Completed')}>
                Completed
            </button>

        </div>
    )
}

export default MissionFilter;