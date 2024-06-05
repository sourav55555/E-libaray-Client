import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import HomeCard from "./HomeCard";
import Loader from "../loader/Loader";

const BooksList = () => {

    const { products, loading } = useProducts();

    return (
        <div className="py-32">

            {loading && <Loader />}

            <div className="flex flex-col md:flex-row items-center md:justify-between px-10">
                <div></div>
                <div className="md:mb-16 mb-4 text-3xl font-semibold px-3 border-l-8 border-[#38598b] w-fit mx-auto">
                    <h2>Our Books</h2>
                </div>
                <div>
                    <Link to="/allBooks" className="px-6 py-2 rounded-lg bg-[#38598b] text-white">See all</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:px-16 px-5 md:mt-0 mt-14">
                {
                    products.slice(0, 6).map(book => <HomeCard key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default BooksList;