import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css"

export const Menu = () => {
    const location = useLocation();

    return (
        <div className="menu-container">
            <NavLink className={`menu-link ${location.pathname === '/' ? "active" : ""}`} to="/">User Form</NavLink>
            <NavLink className={`menu-link ${location.pathname === '/user-details' ? "active" : ""}`} to="/user-details">User Details</NavLink>
        </div>
    );

}