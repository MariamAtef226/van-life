import { Link, NavLink } from "react-router-dom";
import avatar from '../assets/avatar-icon.png'

export default function Navbar() {

    let activeStyling = {
        color: '#161616',
        fontWeight: 'bold',
        textDecoration: "underline",
    };

    return (
        <div className="NavBar d-flex justify-content-between align-items-center">
            <Link to='/' className="home"><img width='40' className='d-none d-md-inline' src="https://cdn-icons-png.flaticon.com/512/1/1642.png" alt='van-icon' /> Van Life</Link>
            <div className="d-flex">
                <NavLink to='/' className='pages pe-3' style={({ isActive }) => (isActive ? activeStyling : null)}>Home</NavLink>
                <NavLink to='/vans' className='pages pe-3' style={({ isActive }) => (isActive ? activeStyling : null)}>Vans</NavLink>
                <NavLink to='/host' className='pages pe-3' style={({ isActive }) => (isActive ? activeStyling : null)}>Host</NavLink>
                <Link to='/login'><img src={avatar} width='30' /> </Link>
            </div>
        </div>
    )
}

// remaining: login logic (if logged in display login link else display log out button)
// handle paths and navigations for login