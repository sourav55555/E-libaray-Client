import Banner from "../components/home/Banner";
import BooksList from "../components/home/BooksList";
import Categories from "../components/home/Categories";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
 
            <div className="total-bg py-28 text-center relative px-4">
                <div className="w-full h-full  bg-[rgba(56,89,139,.5)] absolute top-0 left-0">
                </div>
                <h2 className="md:text-5xl text-4xl font-semibold capitalize text-[#e7eaf6] relative z-10">Total 300+ books available for you</h2>
            </div>

            <BooksList/>
        </div>
    );
};

export default Home;