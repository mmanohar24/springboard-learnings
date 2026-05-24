import "./MissionAction.css"

function MissionAction({ missionId, updateStatus }) {
    return (
        <div className="MissionAction">
            <button className = "MissionAction-launchButton" onClick={ () => updateStatus(missionId, 'Active')}> Launch Button </button>
            <button className="MissionAction-completeButton"  onClick={() => updateStatus(missionId, 'Completed')}>  Complete </button>
        </div>
    )
}

export default MissionAction;