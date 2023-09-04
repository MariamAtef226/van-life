import { Outlet } from "react-router-dom";
import Navbar from './Navbar'

export default function Layout(){
    return(
        <>
        <Navbar />
        <Outlet />
        <footer className='footer'>&#169; 2023 - VanLife </footer>
        </>
    )
}