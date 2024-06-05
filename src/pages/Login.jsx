import { FacebookRounded, Google } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useUser from "../hooks/useUser";


const Login = () => {

    const {reload, setReload} = useUser();

    const location = useLocation();
    const navigate = useNavigate();

    const navPath = location.state?.from?.pathname || "/";


    const {googleLogin, fbLogin, signIn} = useContext(AuthContext)
    const handleLogin = (e)=> {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password);
        setReload(!reload);
        navigate(navPath);
    }

    return (
        <div className="min-h-[90vh] flex items-center justify-center py-8">
            <div className="w-[60%] md:block hidden">
                <img src="/loginbg.jpg" className=" w-[630px] mx-auto object-cover" alt="" loading="lazy" />
            </div>
            <div className="md:w-[45%] p-5 md:p-16">
                <h2 className="text-2xl font-bold mb-8">Login & Enjoy More</h2>
                <div className="bg-[#e7eaf6] p-8 rounded-ss-3xl rounded-ee-full md:w-[80%] flex flex-col gap-4 ">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4 text-center">
                        <input
                            className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="email"
                            name="email" id=""
                            placeholder="Enter You Email" />
                        <input className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="password"
                            name="password" id=""
                            placeholder="Enter Password" />
                        <button type="submit" className="py-3 bg-[#38598b] text-white rounded-2xl font-semibold hover:bg-[#4c7abe] transition-all duration-300 shadow-md">Login</button>
                    </form>
                    <p>Don't have an account?
                        <Link to="/register" className="underline text-green-700 font-semibold mx-1">Register</Link>
                        here
                    </p>
                    <Divider />
                    <button
                        className="bg-[rgba(17,63,103,.9)] py-3 text-white rounded-2xl capitalize hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in"
                        onClick={()=> {googleLogin().then(()=> {setReload(!reload); navigate(navPath)})}}
                    >
                        <Google className="me-4" />
                        Login with google
                    </button>
                    <button 
                    className="bg-[rgba(17,63,103,.9)] py-3 text-white rounded-2xl capitalize hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in"
                    onClick={()=> fbLogin()}
                    >
                    <FacebookRounded className="me-4" />
                    Login with facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;