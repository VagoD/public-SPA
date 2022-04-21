import React from "react";
import {
    Route,
    HashRouter,
    Routes
} from "react-router-dom";
import { UserDetailsViewPage } from "../pages/UserDetailsViewPage";
import { UserDetailsInputPage } from "../pages/UserDetailsInputPage";

export const ContentProvider = ({ children }) => {
    return (
        <HashRouter >
            {children}
            <Routes >
                <Route path="/" element={<UserDetailsInputPage />} />
                <Route path="/user-details" element={<UserDetailsViewPage />} />
            </Routes>
        </HashRouter>
    )
}