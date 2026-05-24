import "./MissionCard.css"
import MissionAction from "./MissionAction"


function MissionCard({ id, name, status, crew, updateStatus }) {
    return (
        <div className="MissionCard">

            <div className="MissionCard-details">
                <h3> {name} </h3>
                <p> <b> Status: </b> {status} </p>
                <p> <b> Crew: </b> {crew.join(", ")} </p>
            </div>

            {
                <MissionAction
                    missionId={id}
                    updateStatus={updateStatus}
                />
            }
        </div>
    )
}

export default MissionCard