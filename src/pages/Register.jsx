import { FacebookRounded, Google } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useUser from "../hooks/useUser";

const Register = () => {

    const {reload, setReload} = useUser();

    const location = useLocation();
    const navigate = useNavigate();

    const navPath = location.state?.form?.pathname || '/';

    const {googleLogin, fbLogin, createUser} = useContext(AuthContext)
    const handleRegister = (e)=> {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const image = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        const userData = {name, image, email}

        if(password === cpassword){
            console.log(email, password, name, image, "em");
            createUser(email, password)
            .then(()=>{
                updateUser(userData);
                setReload(!reload);
                navigate(navPath);
            })
        }
        
    }
    const handleGoogle = ()=>{
        googleLogin()
        .then(data => {
            const userData = {name: data.user.displayName, image: data.user.photoURL, email: data.user.email}
            updateUser(userData);
            setReload(!reload);
            navigate(navPath);
        })
    }

    const updateUser = (userData)=>{

        fetch("https://e-library-server-i7c9.onrender.com/user", {
            method: "POST",
            headers: {
              "content-type": "application/json"
          },
            body: JSON.stringify(userData)
          })
          .then(res => res.json())
          .then(data => console.log(data));
    }

    return (
        <div className="min-h-[90vh] flex items-center justify-center py-8">
            <div className="w-[60%] md:block hidden">
                <img src="/public/pngwing.com (4).png" className=" w-[630px] mx-auto object-cover" alt="" loading="lazy" />
            </div>
            <div className="md:w-[45%] md:p-16 p-5">
                <h2 className="text-2xl font-bold mb-8">Register Here</h2>
                <div className="bg-[#e7eaf6] p-8 rounded-ee-full md:w-[80%] flex flex-col gap-4 ">
                    <form onSubmit={handleRegister} className="flex flex-col gap-4 text-center">
                        <input
                            className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="text"
                            name="name" id=""
                            placeholder="Enter You Name"
                        />
                        <input
                            className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="email"
                            name="email" id=""
                            placeholder="Enter You Email"
                        />
                        <input
                            className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="text"
                            name="photo" id=""
                            placeholder="Enter Image Url"
                        />
                        <input className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="password"
                            name="password" id=""
                            placeholder="Enter Password"
                        />
                        <input className="bg-[rgba(255,255,255,0.5)] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold"
                            type="password"
                            name="cpassword" id=""
                            placeholder="Confirm Password"
                        />
                        <button type="submit" className="py-3 bg-[#38598b] text-white rounded-2xl font-semibold hover:bg-[#4c7abe] transition-all duration-300 shadow-md">Register</button>
                    </form>
                    <p>Already have an account?
                        <Link to="/login" className="underline text-green-700 font-semibold mx-1">Login</Link>
                        here
                    </p>
                    <Divider />
                    <button
                        className="bg-[rgba(17,63,103,.9)] py-3 text-white rounded-2xl capitalize hover:bg-gray-300 hover:text-black transition-all duration-300 ease-in"
                        onClick={handleGoogle}
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

export default Register;