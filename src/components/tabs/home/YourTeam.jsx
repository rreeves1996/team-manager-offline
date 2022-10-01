import React from "react";
import EmpCard from "../../cards/EmpCard";

export default function YourTeam(props) {

    return (
        <div className="your-team">
        <h2>Your Team</h2>
            <div className="card-body">
                <div className="managers">
                    <h5><strong>Managers</strong></h5>
                    <div className="card-container">
                    {props.managers.map(manager => 
                        <>
                            <EmpCard key={manager.id} name={manager.name} role={manager.role} lead={manager.lead} number={manager.number} email={manager.email} timeZone={manager.timeZone}/>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}