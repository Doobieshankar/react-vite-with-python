import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, loading, user } = useSelector(
    (state) => state.userState
  );

  if (!isAuthenticated && !loading) {
    return <Navigate to="/user/login" />;
  }

  if (isAuthenticated) {
    return children;
  }
};

export default ProtectedRoutes;
