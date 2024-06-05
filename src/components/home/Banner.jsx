import CallMadeIcon from '@mui/icons-material/CallMade';

const Banner = () => {
    return (
        <div className="h-[90vh] w-full relative">
            <img
                src="/librarybg.jpg"
                className="absolute top-0 left-0 w-full h-[90vh] object-cover z-0"
                alt="hero bg"
            />
            <div className="w-full h-full flex items-center justify-center relative z-10 bg-[rgba(27,25,25,0.83)] text-white">
                <div className="text-center w-[90%] md:w-[50%] font-semibold">
                    <p className="capitalize text-lg  mb-5">Welcome to e-library</p>
                    <h1 className="capitalize text-5xl font-bold mb-8 text-[#e7eaf6]">Nothing is pleasanter than exploring a library</h1>
                    <p className="w-[90%] mx-auto mb-8">
                        Browse your favorite books, comics, documentary in a large collection with good options. Get discount and other facilities. We are ready to fulfill your requirements.
                    </p>
                    <button className="bg-[#113f67] w-[200px] py-4 rounded-xl transition-all duration-300 ease-in  hover:bg-[#8990c8] group relative">
                        <CallMadeIcon className="group-hover:rotate-45 transition-all duration-300 absolute top-1/2 right-3 -translate-y-1/2" />
                        Get Now !
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;