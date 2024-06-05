import { useEffect, useState } from "react";
import BookTable from "../components/home/BookTable";
import Tabe from "../components/home/BookTable";
import useProducts from "../hooks/useProducts";
import SearchIcon from '@mui/icons-material/Search';

const AllBooks = () => {

    const { products, loading } = useProducts();
    const [bookErr, setBookErr] = useState(false);

    const [books, setBooks] = useState([]);
    useEffect(() => {
        if (!loading) {
            setBooks(products)
        }
    }, [loading])
    console.log(books);

    const handleSearch = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name);

        fetch(`https://e-library-server-i7c9.onrender.com/bookName/${name}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Book not found");
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    setBookErr(false)
                    setBooks([data]);
                } else {
                    console.log("Book not found");
                }
            })
            .catch(error => {
                console.error("Error fetching book:", error.message);
                setBookErr(true)
            });
    }

    return (
        <div className="min-h-screen">
            <div className="mb-16 text-4xl font-semibold px-3 my-20 w-fit mx-auto flex items-center justify-center gap-4">
                <img src="/public/logo/books1.gif" className="w-[58px] rounded-full" alt="" />
                <h2>All Available Books List</h2>
            </div>
            <form onSubmit={handleSearch} action="" className="mt-4 mb-12 mx-auto text-center">
                <input type="text" name="name" className="py-2 px-6 rounded-3xl border border-slate-700 shadow-md md:w-[400px] w-[80%]" placeholder="Search Book By Name" />
                <button type="submit" className="text-white py-2 px-4 -ms-14 hover:bg-[#a2a8d3] bg-[#38598b] rounded-3xl transition-all duration-300 -mt-1"><SearchIcon /></button>
            </form>

            {bookErr && <p className="my-4 text-red-500 text-center mx-auto">Book not found, Please try with another name</p>}

            <div className="px-14 mb-32">
                <BookTable products={books} />
            </div>
        </div>
    );
};

export default AllBooks;