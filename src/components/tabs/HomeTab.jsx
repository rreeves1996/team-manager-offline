import React, { useEffect, useState } from 'react';

export default function HomeTab({ nodeRef }) {
  const [roles, addRole] = useState([]);


  const employeeCount = 5;
  const managerCount = 2;
  const role1 = {
    roleName: "Quarterback",
    roleSalary: "5",
    empCount: 2
  }
  const role2 = {
    roleName: "Runningback",
    roleSalary: "5",
    empCount: 2
  }
  const role3 = {
    roleName: "Crowd Streaker",
    roleSalary: "5",
    empCount: 1
  }

  const handleAddRoles = (newRole) => addRole(roles => [...roles, newRole]);
  const addAllRoles = () => {
    handleAddRoles(role1);
    handleAddRoles(role2);
    handleAddRoles(role3);
    console.log(roles);
  }
  
  console.log(roles);
  const origDate = new Date().toDateString();
  const dateArray = origDate.split(" ");
  const dateNum = dateArray[2].split("");
  const date = {
    weekDay: "",
    day: "",
    month: "",
    year: dateArray[3]
  }

  switch(dateArray[0]) {
    case "Mon":
      date.weekDay = "Monday";
      break;
    case "Tue":
      date.weekDay = "Tuesday";
      break;
    case "Wed":
      date.weekDay = "Wednesday";
      break;
    case "Thu":
      date.weekDay = "Thursday";
      break;
    case "Fri":
      date.weekDay = "Friday";
      break;
    case "Sat":
      date.weekDay = "Saturday";
      break;
    case "Sun":
      date.weekDay = "Sunday";
      break;
    default:
      break;
  }
  switch(dateArray[1]) {
    case "Jan":
      date.month = "January";
      break;
    case "Feb":
      date.month = "February";
      break;
    case "Mar":
      date.month = "March";
      break;
    case "Apr":
      date.month = "April";
      break;
    case "May":
      date.month = "May";
      break;
    case "Jun":
      date.month = "June";
      break;
    case "Jul":
      date.month = "July";
      break;
    case "Aug":
      date.month = "August";
      break;
    case "Sep":
      date.month = "September";
      break;
    case "Oct":
      date.month = "October";
      break;
    case "Nov":
      date.month = "November";
      break;
    case "Dec":
      date.month = "December";
      break;
    default:
      break;
  }
  switch(dateNum[1]) {
    case "1":
      date.day = dateArray[2] + "st";
      break;
    case "2":
      date.day = dateArray[2] + "2nd";
      break;
    case "3":
      date.day = dateArray[2] + "rd";
      break;
    default:
      date.day = dateArray[2] + "th";
      break;

  }

  useEffect(() => {
    addAllRoles();
  }, [])

  return (
    <>
      <div className="col-home">
        <div className="welcome">
          <h2>Summary</h2>
          <div className="welcome-header">
            <h6>Welcome to TeamEZ! Today is</h6>
            <h5><strong>{date.weekDay}, {date.month} {date.day}, {date.year}</strong></h5>
          </div>
          <div className="divider"></div>
          <div className="card-body">
            <p>Your team currently has <strong>{managerCount}</strong> managers 
            and <strong>{employeeCount}</strong> employees <span className='more-stats'>More stats <i className="fa-solid fa-caret-down"></i></span></p>
            <div className="section">
              <p><strong>Payroll Total:</strong> </p>
              <p><strong>Avg. Salary:</strong> </p>
              {roles.forEach((role) => (
                <>
                  <p>
                    <strong>Total {role.roleName}s: {role.empCount}</strong>
                  </p>
                </>
              ))}
            </div>
            <p>To edit your team name, manager, or delete your team, click the <i className='fa-solid fa-pen-to-square'></i> icon</p>
          </div>
        </div>
        <div className="quick-add" ref={nodeRef}>
          <h2>Quick-Add</h2>
        </div>
      </div>
      <div className="your-team">
        <h2>Your Team</h2>
      </div>
    </>
  );
}

