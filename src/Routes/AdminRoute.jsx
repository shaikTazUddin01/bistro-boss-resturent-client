import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const [user,loading]=useAuth()
    const [isAdmin,isPending]=useAdmin()
    const location=useLocation()
   
    if(isPending){
        return <p>loading...</p>
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default AdminRoute;