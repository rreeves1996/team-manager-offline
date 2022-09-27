import React, { useState } from 'react';
import Banner from "../assets/banner.jpg";

export default function InitPrompt({ handlePageChange, }) {
    const [collapsedMenu, toggleCollapseMenu] = useState(true);
    const [currentTab, setCurrentTab] = useState("Solo");

    const teamName = localStorage.getItem("teamName");
    const managerName = localStorage.getItem("managerName");

    const deleteTeam = () => {
        localStorage.clear();
        handlePageChange("Init");
    }

    const renderTab = () => {
        if(currentTab === "Solo") {
            return soloProjects;
        } else if (currentTab === "Group") {
            return groupProjects;
        }
    };

    const handleTabChange = (tab) => setCurrentTab(tab);

    return (
        <> 
            <header>
                <div className="header-text">
                    <h1>{teamName}</h1>
                    <h4><i class="fa-solid fa-user"></i> Manager: <strong>{managerName}</strong></h4>
                </div>
                <div className={collapsedMenu ? "menu-button" : "menu-button open"} >
                    <i class="fa-solid fa-pen-to-square"onClick={() => toggleCollapseMenu(!collapsedMenu)}></i>
                    <ul className={!collapsedMenu ? "team-menu" : "team-menu collapse"}>
                        <li id="edit-name">Edit team name</li>
                        <li id="edit-manager">Edit manager</li>
                        <li onClick={deleteTeam} id="delete-team">Delete team</li>
                    </ul>
                </div>
                
            </header>
            
            <div className="home-container">

            </div>
        </>
    );
}

