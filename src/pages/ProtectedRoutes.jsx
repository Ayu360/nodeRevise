import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext"
import { useEffect } from "react";

function ProtectedRoutes({children}) {
    const {isAuthenticated} = useCities();
    const navigate = useNavigate();

    useEffect(function(){
        if(!isAuthenticated) navigate("/")
    },[navigate, isAuthenticated])

    return isAuthenticated ? children: null
}

export default ProtectedRoutes
