import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import BookCard from "../../components/dashboard/book/BookCard";
import EditBook from "../../components/dashboard/editBook/EditBook";
import Loader from "../../components/loader/Loader";


const MyBooks = () => {

    const [books, setBooks] = useState([]);
    const [load, setLoad] = useState(true);
    const [reload, setReload] = useState(false);
    const { name } = useUser()

    useEffect(() => {

        fetch(`https://e-library-server-i7c9.onrender.com/authorBooks/${name}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        ).then(res => res.json())
            .then(data => { setBooks(data); setLoad(false) });
    }, [name, reload])

    return (
        <div className="p-16">
            <p className="text-3xl font-semibold">Books Collection</p>

            {
                load ? <Loader /> :
                    <div className="grid grid-cols-3 gap-5 mt-14">
                        {books.map(book => <BookCard key={book._id} book={book} setReload={setReload} reload={reload} />)}
                    </div>
            }
            { books.length == 0 && <p>No Book Added.</p> }

        </div>
    );
};

export default MyBooks;