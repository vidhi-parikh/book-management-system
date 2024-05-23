import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import SignUp from "../components/Authentication/Signup/Signup";

const HomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/dashboard");
  }, [navigate]);

  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="flex flex-col items-center max-xl:w-0 mt-10 ml-0 mb-4 mr-0">
      {showSignUp === true ? (
        <SignUp setShowSignUp={setShowSignUp} />
      ) : (
        <Login setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
};

export default HomePage;
