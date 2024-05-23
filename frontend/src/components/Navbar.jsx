import React from "react";
import { Link } from "react-router-dom";
import { UserState } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const { user, setUser } = UserState();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <nav className="bg-black text-orange-600 font-bold lg:p-4">
      <div className="mx-2 flex justify-between items-center">
        <Link to="/dashboard" className="text-xl">
          Book Management System
        </Link>
        <div className="flex items-center">
          {!user ? (
            <>
              <Link to="/">
                Login
              </Link>
            </>
          ) : (
            <button onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
