import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {

    let activeStyling = {
        color: '#161616',
        fontWeight: 'bold',
        textDecoration: "underline",
    };
    let nav = useNavigate();


    return (<>
        <div className="NavBar d-flex justify-content-between align-items-center ps-2 pe-2">
            <Link to='/van-life' className="home"><img width='40' className='d-none d-md-inline' src="https://cdn-icons-png.flaticon.com/512/1/1642.png" alt='van-icon' /> Van Life</Link>
            <div className="d-flex">
                <NavLink to='/van-life' end className='pages pe-1 pe-md-3' style={({ isActive }) => (isActive ? activeStyling : null)}>Home</NavLink>
                <NavLink to='/van-life/vans' className='pages pe-1 pe-md-3' style={({ isActive }) => (isActive ? activeStyling : null)}>Vans</NavLink>
                <NavLink to='/van-life/host' className='pages pe-1' style={({ isActive }) => (isActive ? activeStyling : null)}>Host</NavLink>
                {localStorage.getItem('userId') &&
                    <button
                        className="logout ms-1 ms-md-2"
                        onClick={() => {
                            localStorage.removeItem("userId");
                            nav("/van-life", { replace: true });
                        }}>
                        Log out
                    </button>
                }
            </div>
        </div>


    </>
    )
}

// remaining: login logic (if logged in display login link else display log out button)
// handle paths and navigations for login