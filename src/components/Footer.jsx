import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#113f67] text-white pt-2">
            <div className="py-7 w-full  flex items-center md:justify-center justify-between px-4">
                <div className="md:flex-1 text-center">
                    <Link to="/" className="flex items-center justify-center font-bold text-3xl w-[20%] mx-auto">
                        <img className="w-[55px] h-[55px] me-2" src="/logo/school.png" alt="" />
                        E-<span className="italic">LIBRARY</span>
                    </Link>
                </div>
                <div className="md:flex-1 text-center">
                    <div className="flex flex-col gap-3 items-start w-fit mx-auto">
                        <Link>Home</Link>
                        <Link>About Us</Link>
                        <Link>Collections</Link>
                    </div>
                </div>
            </div>
            <div className="text-center py-6 border-t border-gray-400">
                @ Copyright reserver 2024
            </div>
        </div>
    );
};

export default Footer;