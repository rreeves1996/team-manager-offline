import React, { useState } from 'react';
import Banner from "../assets/banner.jpg";

export default function InitPrompt() {
    const [formState, setFormState] = useState({ teamname: '', username: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    

    
        setFormState({
            username: '',
            password: '',
        });
    };
    
    return (
        <>
            <div className="container init-container">
                <div className="form-side">
                    <h1>Welcome!</h1>
                    <h6>Enter your team and manager's name:</h6>
                    <form className='init-form' onSubmit={handleFormSubmit}>
                        <div className='init-input'>
                            <div class='field'>
                                <label class='label'>Team</label>
                                <div class='control'>
                                    <input
                                        class='input'
                                        type='teamname'
                                        placeholder="Your team's name"
                                        name='teamname'
                                        value={formState.teamname}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div class='field'>
                                <label class='label'>Team Manager's Name</label>
                                <div class='control'>
                                    <input
                                        class='input'
                                        type='username'
                                        name='username'
                                        placeholder="Your team's manager"
                                        value={formState.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className='init-button-container'>
                            <button className='init-button' type='submit'>
                                Generate Team
                            </button>
                        <div className="divider"></div>
                            <div className="sub-container d-flex flex-column align-items-center mb-5">
                                <p className='mt-1 mb-2'>Already generated a team?</p>
                                <a href='#'>
                                    Saved teams
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="banner-side">
                    <img src={Banner} alt="banner" className='banner' />
                </div>
            </div>
        </>
    );
}

