import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function HostAuthenticator() {
    let loc = useLocation();
    if (!localStorage.getItem('userId')) {
        return <Navigate to={`login?redirect=${loc.pathname}`} />
    }
    return <Outlet />
}
