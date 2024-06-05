import toast, { Toaster } from "react-hot-toast";
import useUser from "../../hooks/useUser";


const AddBooks = () => {

    const {name} = useUser();
    // console.log(name);

    const handleBook = (e)=> {
        e.preventDefault();

        const form = e.target;
        const bookName = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const author = name;

        const bookdata = {name: bookName, image, category, price, author, description};

        fetch("https://e-library-server-i7c9.onrender.com/book",{
            method: "POST",
            headers: {
                "content-type" : "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(bookdata)
        })
        .then(res => res.json())
        .then(() => { toast.success("Your book added successfully!") ;form.reset()})

    }

    return (
        <div className="h-screen flex items-center overflow-hidden">
            <div className="w-[60%]">
                <img src="/pngwing.com (3).png" className="object-cover w-full " alt="" loading="lazy" />

            </div>
            <div className="text-center w-[40%] -ms-32">
                <div className="w-[400px] mt-20">
                    <p className="text-xl font-bold mb-4">Add Your Book</p>
                </div>
                <form onSubmit={handleBook} action="" className="w-[400px]">

                    <input type="text" className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-3" name="name" placeholder="Enter Book Name" />

                    <input type="text" className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-3" name="category"
                        placeholder="Enter Category" />

                    <input type="number" className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-3" name="price"
                        placeholder="Enter Price"
                    />

                    <input type="text" className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-3" name="image"
                        placeholder="Enter Cover Image Url"
                    />
                
                    <textarea name="description" rows="4" className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-3"
                        placeholder="Enter Description"
                    ></textarea>

                    <button type="submit" className="py-3 mt-3 hover:bg-[#41709e] transition-all duration-200 shadow-md shadow-gray-500 bg-[#113f67] rounded-xl w-full text-white">Add Book</button>
                </form>
            </div>
            <Toaster/>
        </div>
    );
};

export default AddBooks;