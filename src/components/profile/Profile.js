import React, {useState, useEffect} from "react";
import axios from "axios";

import email from "../../assets/img/email.png";
import anonymous_avatar from "../../assets/img/anonymous.png";
//import { Profiler } from "react/cjs/react.production.min";

function Profile() {

    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/user`)
        .then((response) => {
            setProfile(response.data);
        });
    }, []);


    const handleNavigateToProfile = () => {
        window.location = profile.html_url
    }

    return (
        <div className="profile-content-container">
            <img
            src={profile.avatar_url ? profile.avatar_url : anonymous_avatar}
            alt="avatar"
            className="profile-avatar"
            />
            <h3 onClick={handleNavigateToProfile} className="profile-name">
                {profile.name} <br/>
                {profile.login &&
                    <span className="profile-login">
                        @{profile.login}
                    </span>
                }
            </h3>
            <div className="profile-info">
                <span>{profile.bio}</span>
                <div className="profile-social-items">
                    { profile.followers && 
                        <span className="profile-social-item">
                            <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-people">
                                <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                            </svg>
                            <span><b>{profile.followers}</b> followers</span>
                        </span>
                    }
                    { profile.following &&
                        <span className="profile-social-item">
                            <span>.</span>
                            <span><b>{profile.following}</b> following</span>
                        </span> 
                    }
                        
                </div>
                <div className="profile-info-items">
                    
                    {profile.email &&
                        (
                            <span className="profile-info-item">
                                <img src={email} className="profile-info-icon" alt="email"/>
                                <span>{profile.email}</span>
                            </span>
                        )
                    }
                    {profile.location && 
                        (
                            <span className="profile-info-item">
                                <svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
                                </svg>
                                <span>{profile.location}</span>
                            </span>
                        )
                    }
                    {profile.company &&
                        (
                            <span className="profile-info-item">
                                <svg className="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
                                </svg>
                                <span>{profile.company}</span>
                            </span>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )


} 

export default Profile;