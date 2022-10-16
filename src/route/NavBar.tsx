import React from 'react';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <nav>
                <div><NavLink to="/profile">Profile</NavLink></div>
                <div><NavLink to="/newpass">Newpass</NavLink></div>
                <div><NavLink to="/login">Login</NavLink></div>
                <div><NavLink to="/recoverypass">RecoveryPass</NavLink></div>
                <div><NavLink to="/registration">Registration</NavLink></div>
            </nav>
        </div>
    );
};
