import { AutoStoriesTwoTone } from '@mui/icons-material';
import DetailsIcon from '@mui/icons-material/Details';
import DetailsTwoToneIcon from '@mui/icons-material/DetailsTwoTone';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className="py-32 w-full text-center">
            <div className="mb-16 text-3xl font-semibold px-3 border-l-8 border-[#38598b] w-fit mx-auto">
                <h2>Top Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-20 text-[#304d7a]">
                <div className="bg-[#e7eaf6] pb-4 rounded-2xl overflow-hidden shadow-lg group relative">
                    <Link to="/" className='bg-[rgba(0,0,0,.6)] h-full w-full absolute top-0 left-full group-hover:left-0 transition-all duration-500 ease-out grid place-content-center text-gray-100'>
                        <DetailsTwoToneIcon style={{ fontSize: '90px' }} />
                        <p className='mt-5 font-semibold'>See Details</p>
                    </Link>
                    <img src="/image/fantasy.jpg" className="h-[220px] w-full object-cover" alt="" />
                    <p className="font-bold text-2xl mt-3">Fantasy</p>
                    <p className="text-lg mt-3 font-semibold"> <AutoStoriesTwoTone/> : 12</p>
                </div>
                <div className="bg-[#e7eaf6] pb-4 rounded-2xl overflow-hidden shadow-lg group relative">
                    <Link to="/" className='bg-[rgba(0,0,0,.6)] h-full w-full absolute top-0 left-full group-hover:left-0 transition-all duration-500 ease-out grid place-content-center text-gray-100'>
                        <DetailsTwoToneIcon style={{ fontSize: '90px' }} />
                        <p className='mt-5 font-semibold'>See Details</p>
                    </Link>
                    <img src="/image/scifi.jpg" className="h-[220px] w-full object-cover" alt="" />
                    <p className="font-bold text-2xl mt-3">Sci-Fi</p>
                    <p className="text-lg mt-3 font-semibold"><AutoStoriesTwoTone/> : 20</p>
                </div>
                <div className="bg-[#e7eaf6] pb-4 rounded-2xl overflow-hidden shadow-lg group relative">
                    <Link to="/" className='bg-[rgba(0,0,0,.6)] h-full w-full absolute top-0 left-full group-hover:left-0 transition-all duration-500 ease-out grid place-content-center text-gray-100'>
                        <DetailsTwoToneIcon style={{ fontSize: '90px' }} />
                        <p className='mt-5 font-semibold'>See Details</p>
                    </Link>
                    <img src="/image/adven.jpg" className="h-[220px] w-full object-cover" alt="" />
                    <p className="font-bold text-2xl mt-3">Adventure Fiction</p>
                    <p className="text-lg mt-3 font-semibold"><AutoStoriesTwoTone/> : 10</p>
                </div>
                <div className="bg-[#e7eaf6] pb-4 rounded-2xl overflow-hidden shadow-lg group relative">
                    <Link to="/" className='bg-[rgba(0,0,0,.6)] h-full w-full absolute top-0 left-full group-hover:left-0 transition-all duration-500 ease-out grid place-content-center text-gray-100'>
                        <DetailsTwoToneIcon style={{ fontSize: '90px' }} />
                        <p className='mt-5 font-semibold'>See Details</p>
                    </Link>
                    <img src="/image/novel.jpg" className="h-[220px] w-full object-cover" alt="" />
                    <p className="font-bold text-2xl mt-3">Graphic Novel</p>
                    <p className="text-lg mt-3 font-semibold"><AutoStoriesTwoTone/> : 14</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;