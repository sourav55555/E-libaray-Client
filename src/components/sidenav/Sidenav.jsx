import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <div className='w-[260px] bg-slate-700 h-screen fixed top-0 left-0 p-2'>
            <Link to="/" className="flex items-center justify-center font-bold text-2xl text-white mt-6 mx-auto">
                <img className="w-[35px] h-[35px] me-2" src="/logo/school.png" alt="" />
                E-<span className="italic">LIBRARY</span>
            </Link>
            <div className='pt-16 ps-12 flex flex-col gap-5 text-white font-semibold'>
                <Link to="/dashboard/home" className='hover:border-b-2 w-fit transition-all duration-300'>Home</Link>
                <Link to="/dashboard/profile" className='hover:border-b-2 w-fit transition-all duration-300'>Profile</Link>
                <Link to="/dashboard/myBooks" className='hover:border-b-2 w-fit transition-all duration-300'>My Books</Link>
                <Link to="/dashboard/addBook" className='hover:border-b-2 w-fit transition-all duration-300'>Add Book</Link>
                <Divider sx={{ backgroundColor: 'white' }}/>
                <Link to="/" className='hover:border-b-2 w-fit transition-all duration-300'>Homepage</Link>

            </div>
        </div>
    );
};

export default Sidenav;