import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../Providers/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-52 ">
        <Spinner className="h-10 w-10 " />
        <p className="font-bold text-lg mt-1 ml-5">Loading....</p>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

PrivetRoute.propTypes = {
  children: PropTypes.element,
};
export default PrivetRoute;
