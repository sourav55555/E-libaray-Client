import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useUser from "../../hooks/useUser";
import SideBar from "./SideBar";


const Navbar = () => {

    const { logOut, user } = useContext(AuthContext);
    const { image } = useUser();

    return (
        <div className="py-8 md:px-20 px-4 flex items-center justify-between bg-[#e7eaf6] text-gray-700">
            <div className="font-semibold items-center gap-8 uppercase w-[40%] md:flex hidden">
                <Link to="/" className="hover:border-b-2 border-black transition-all duration-300">Home</Link>
                <Link to="/allBooks" className="hover:border-b-2 border-black transition-all duration-300">All Books</Link>

                <Link to="/about" className="hover:border-b-2 border-black transition-all duration-300">About Us</Link>
                {user ?
                    <Link to="/dashboard/home" className="hover:border-b-2 border-black transition-all duration-300">Dashboard</Link> :
                    <Link to="/register" className="hover:border-b-2 border-black transition-all duration-300">Register</Link>
                }
            </div>
            <Link to="/" className="flex items-center justify-center font-bold text-2xl md:text-3xl md:w-[20%]">
                <img className="w-[55px] h-[55px] me-2" src="/logo/school.png" alt="" />
                E-<span className="italic">LIBRARY</span>
            </Link>
            <div className="md:w-[40%] text-right">
                {
                    user ?
                        <div className="flex gap-4 items-center">
                            <button className="ms-auto text-red-500 hidden md:block px-6 py-2 border border-red-500 rounded-md font-semibold hover:bg-red-700 hover:text-white transition-all duration-300"
                                onClick={() => logOut()}
                            >Logout</button>
                            {/* <img src={image} className="w-14 h-14 rounded-full border border-gray-500" alt="" /> */}
                        </div>
                        :
                        <Link to="/login" className="md:inline-block hidden ms-auto text-[#38598b] px-6 py-2 border border-[#38598b] rounded-md font-semibold hover:bg-[#38598b] hover:text-white transition-all duration-300">Login</Link>
                }
                <div className="md:hidden block">
                    <SideBar />
                </div>
            </div>
        </div>
    );
};

export default Navbar;