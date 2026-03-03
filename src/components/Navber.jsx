// import { Link, NavLink, useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import useRole from "../hooks/useRole";

import { Link, NavLink } from "react-router";
import Logo from "../Shareeded/Logo";


const Navbar = () => {
    // const { user, logOut } = useAuth();
    // const { role } = useRole();
    const role = "vendor"
    const user = null;
    // const navigate = useNavigate();

    /* const handleLogout = async () => {
        await logOut();
        navigate("/");
    }; */

    const dashboardPath =
        role === "admin"
            ? "/dashboard/admin/users"
            : role === "vendor"
                ? "/dashboard/vendor/my-products"
                : "/dashboard/profile";

    const navLinks = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-accent text-base-100 " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-accent-content"} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "text-sm md:text-lg lg:text-lg font-semibold bg-accent text-base-100 " : "text-sm md:text-lg lg:text-lg font-semibold text-[#606060] hover:bg-accent-content"} to='/oders'>Track Order</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4">

            {/* Left Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        ☰
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>

                {/* Logo + Website Name */}
                <Logo></Logo>
            </div>

            {/* Center Section */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            {/* Right Section */}
            <div className="navbar-end gap-2">

                {!user && (
                    <>
                        <Link to="/login" className="btn btn-outline btn-primary">
                            🔐 Login
                        </Link>
                        <Link to="/register" className="btn btn-primary">
                            🧾 Sign Up
                        </Link>
                    </>
                )}

                {user && (
                    <>
                        {/* Dashboard Button */}
                        <Link to={dashboardPath} className="btn btn-accent">
                            📊 Dashboard
                        </Link>

                        {/* Profile Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                                        alt="profile"
                                    />
                                </div>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link to="/dashboard/profile">👤 Profile</Link>
                                </li>
                                <li>
                                    <button >
                                        🚪 Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;