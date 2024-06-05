import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


export default function SideBar() {
    const [open, setOpen] = React.useState(false);

    const { logOut, user } = React.useContext(AuthContext);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 220, backgroundColor: "#113f67", height: "100%" }} role="presentation" onClick={toggleDrawer(false)}>

            <div className='bg-[#113f67] text-white h-full flex flex-col pt-10 px-6 gap-5'>
                <Link to="/" className="hover:border-b-2 border-black transition-all duration-300">Home</Link>
                <Link to="/allBooks" className="hover:border-b-2 border-black transition-all duration-300">All Books</Link>

                <Link to="/about" className="hover:border-b-2 border-black transition-all duration-300">About Us</Link>
                {user ?
                    <>
                        <Link to="/dashboard/home" className="hover:border-b-2 border-black transition-all duration-300">Dashboard</Link>
                        <button className="mt-6 mx-auto text-red-500 px-6 py-2 border border-red-500 rounded-md font-semibold hover:bg-red-700 hover:text-white transition-all duration-300"
                            onClick={() => logOut()}
                        >Logout</button>
                    </> :
                    <>
                        <Link to="/register" className="hover:border-b-2 border-black transition-all duration-300">Register</Link>
                        <Link to="/login" className="mt-6 mx-auto text-[#789fdb] px-6 py-2 border border-[#8ba8d3] rounded-md font-semibold hover:bg-[#5378ae] hover:text-white transition-all duration-300">Login</Link>
                    </>
                }

            </div>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><MenuOpenIcon /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)} >
                {DrawerList}
            </Drawer>
        </div>
    );
}