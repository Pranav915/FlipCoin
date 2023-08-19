import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { logout } from "../../../shared/utils/logout";
import { getMainActions } from "../../../app/actions/mainActions";
import { getAuthActions } from "../../../app/actions/authActions";
import { connect } from "react-redux";
import SellerHomeNavbar from "./SellerHomeNavbar";

const SellerHomePage = ({ setUserDetails }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));

    if (!userDetails) {
      logout();
    } else if (userDetails.role === "customer") {
      console.log(userDetails);
      navigate("/home");
    } else {
      setUserDetails(userDetails);
    }
  }, []);

  return (
    <>
      <SellerHomeNavbar />
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getMainActions(dispatch),
    ...getAuthActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(SellerHomePage);
