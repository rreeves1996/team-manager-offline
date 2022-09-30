import React, { useState } from 'react';
import Banner from "../assets/banner.jpg";
import HomeTab from './tabs/HomeTab';
import ManageTab from './tabs/ManageTab';

export default function InitPrompt({ handlePageChange }) {
    const [inProp, setInProp] = useState(false);
    const [collapsedMenu, toggleCollapseMenu] = useState(true);
    const [currentTab, setCurrentTab] = useState("Home");

    const teamName = localStorage.getItem("teamName");
    const managerName = localStorage.getItem("managerName");
    // const nodeRef = useRef(null);

    const renderTab = () => {
        if(currentTab === "Home") {
            return <HomeTab  handleTabChange={handleTabChange}/>;
        } else if (currentTab === "Manage") {
            return <ManageTab  handleTabChange={handleTabChange}/>;
        }
    };  
    const deleteTeam = () => {
        localStorage.clear();
        handlePageChange("Init");
    }

    const handleTabChange = (tab) => setCurrentTab(tab);


    return (
        <> 
            <header>
                <div className="row">
                    <div className="header-text">
                        <h1>{teamName}</h1>
                        <h4><i className="fa-solid fa-user"></i> Manager: <strong>{managerName}</strong></h4>
                    </div>
                    <div className={collapsedMenu ? "menu-button" : "menu-button open"} >
                        <i className="fa-solid fa-pen-to-square"onClick={() => toggleCollapseMenu(!collapsedMenu)}></i>
                        <ul className={!collapsedMenu ? "team-menu" : "team-menu collapse"}>
                            <li id="edit-name">Edit team name</li>
                            <li id="edit-manager">Edit manager</li>
                            <li onClick={() => deleteTeam()} id="delete-team">Delete team</li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="tab-container">
                    <button className="tab-button" onClick={() => {
                        handleTabChange("Home");
                        setInProp(true)
                    }}>Home</button>
                    <button className="tab-button" onClick={() => {
                        handleTabChange("Manage");
                        setInProp(true)
                    }}>Manage</button>
            </div>
            <div className="home-container">
                {/* <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="tab"> */}
                    {renderTab()}
                {/* </CSSTransition> */}
                
            </div>
        </>
    );
}

