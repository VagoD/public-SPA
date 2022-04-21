import React from "react";
import { useNavigate } from "react-router-dom";
import { UserView } from "../components/UserView";
import { getUserDetails } from "../utils/storingUtils";
import "./UserDetailsViewPage.css"


export const UserDetailsViewPage = () => {

  const userDetails = getUserDetails();
  const navigate = useNavigate();

  return (
    <>
      {userDetails ? (
        <UserView details={userDetails} />
      ) : (<div className="text">Please fill the user details <span className="form-page-link" onClick={() => navigate("/")} >here</span> .</div>)}
    </>
  );
}