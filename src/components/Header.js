import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    console.log("Sign Out button clicked"); // Debugging
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully"); // Debugging
        navigate("/"); // Redirect to the login page
      })
      .catch((error) => {
        console.error("Error signing out:", error); // Debugging
        navigate("/error"); // Redirect to an error page
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      { user && (
      <div className="flex p-2">
        <img
          alt="user-icon"
          className="w-12 h-12"
          src = {user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
