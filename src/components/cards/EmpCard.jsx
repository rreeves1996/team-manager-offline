import React from 'react';

export default function EmpCard(props) {
  return (
    <>
        <div className="emp-card">
            <h6 className="emp-name"><strong>{props.name}</strong></h6>
            <h6 className="emp-role">{props.lead ? "Team Lead" : props.role}</h6>
            <div className="divider"></div>
            <div className="emp-contact-info">
                <p><strong>Phone Number:</strong> {props.number}</p>
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Time Zone:</strong> UTC -{props.timeZone}:00</p>
            </div>
        </div>
    </>
  );
}

