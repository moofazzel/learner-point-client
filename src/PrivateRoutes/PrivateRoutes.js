import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../UserContext/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  console.log(user);

    const location = useLocation();
    
    if (loading) {
        return <span>Redirect..</span>
     }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoutes;
