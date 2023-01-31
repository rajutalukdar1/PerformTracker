import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Page/Others/Loading/Loading";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useSelector(state => state.userReducer);
    const location = useLocation();
    if (loading) {
        return (
            <Loading></Loading>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivetRoute;