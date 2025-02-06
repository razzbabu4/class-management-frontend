import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { auth, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="text-6xl animate-spin">⏳</div>
        </div>
    }
    if (auth) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/'></Navigate>
};

export default PrivateRoute;