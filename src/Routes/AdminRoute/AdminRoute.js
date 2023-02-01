import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Page/Others/Loading/Loading";
// import Loading from "../../Pages/Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
    const { user, loading } = useSelector(state => state.userReducer);
    // const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
        return (
            <Loading></Loading>
        )
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default AdminRoute;