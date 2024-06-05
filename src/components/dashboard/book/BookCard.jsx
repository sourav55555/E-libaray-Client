import React from 'react';
import EditBook from '../editBook/EditBook';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const BookCard = ({ book, reload, setReload }) => {
    const { _id, name, image, category, price, author, description } = book

    const handleDelete = () => {


        Swal.fire({
            title: "Confirm Delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://e-library-server-i7c9.onrender.com/book/${_id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                    .then(res => res.json())
                    .then((data) => {console.log(data), 
                        toast.success('Successfully deleted!');
                        setReload(!reload);
                    })

            }
        });



    }

    return (
        <div className='flex flex-col gap-4 justify-between shadow-lg shadow-slate-500 group'>
            <div className='text-center p-6 '>
                <img src={image} className='h-[280px] object-cover mx-auto shadow-[#495586] shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-in' alt="" />
            </div>
            <div className='p-5 pt-1 '>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='mt-2'><span className='font-semibold'>Category :</span>  {category}</p>
                <p className='mt-2'><span className='font-semibold'>Price :</span> {price} $</p>
                <p className='mt-2'><span className='font-semibold'>Author:</span> {author}</p>
                <p className='mt-2'><span className='font-semibold'>Description:</span> {description}</p>
            </div>
            <div className='grid grid-cols-2 gap-4 px-4 pb-4'>
                <EditBook book={book} setReload={setReload} reload={reload} />
                {/* <button className='py-2 bg-green-600 text-white rounded-xl'>Edit Book</button> */}
                <button onClick={handleDelete} className='py21 bg-red-500 text-white rounded-xl hover:bg-red-700 transition-all duration-300'>Delete</button>
            </div>
            <Toaster/>
        </div>
    );
};

export default BookCard;