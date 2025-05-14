import CustomNavbar from "../components/Navbar/Navbar.jsx";
import {Outlet} from "react-router";

export default function Layout() {
    return (
        <>

            <CustomNavbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}