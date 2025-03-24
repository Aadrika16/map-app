import React from 'react';
import { Navigate} from 'react-router-dom';
import Cookies from "js-cookie"

const ProtectedRoute = ({children}) => {
  const token = Cookies.get('jwt_token'); // Check if the user is authenticated

  if (token===undefined) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children // Return the protected route if authenticated
};

export default ProtectedRoute;
