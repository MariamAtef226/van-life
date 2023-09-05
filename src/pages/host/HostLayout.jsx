import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {

    let activeStyling = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }

    return (
        <>
            <div
                className="navbar d-flex justify-content-between flex-wrap ps-3"
                style={{ maxWidth: "190px", fontSize: '1.3rem' }}
            >
                <NavLink className="navigLink pages ms-2 me-2" style={({ isActive }) => isActive ? activeStyling : null} end to="/van-life/host">
                    Statistics
                </NavLink>
                <NavLink className="navigLink pages ms-2 me-2" style={({ isActive }) => isActive ? activeStyling : null} to="vans">
                    Vans
                </NavLink>
            </div>

            <Outlet />
        </>
    );
}
