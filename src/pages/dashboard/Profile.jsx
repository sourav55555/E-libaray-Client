import { Divider } from "@mui/material";
import useUser from "../../hooks/useUser";
import { useContext, useState } from "react";
import Loader from "../../components/loader/Loader";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Profile = () => {
    

    const { email, name, image , reload, setReload, loader} = useUser();
    const {updatePass} = useContext(AuthContext);
    const [showEdit, setShowEdit] = useState(false);
    const [showPassChange, setShowPassChange] = useState(false)
    console.log(image)

    const [pass, setPass] = useState("")
    console.log(pass, "df")

    const updatePassword = ()=>{
        updatePass(pass)
        .then(() => toast.success("Password Updated"))
        .catch((error) =>console.log(error));

    }

    const handleProfileUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        const updateData = { name, image: photo };

        fetch(`https://e-library-server-i7c9.onrender.com/user/${email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(() => { setShowEdit(false); setReload(!reload) });
    }

    return (
        <div className="p-16">
            <h2 className="text-3xl font-semibold">Profile Details</h2>
            {loader && <Loader/>}
            <div className="text-right">
                <button
                    className="px-6 py-2 font-semibold bg-orange-300 hover:bg-orange-500 transition-all duration-200 rounded-xl"
                    onClick={() => setShowEdit(true)}
                >
                    Edit Profile
                </button>
            </div>
            <div className="mt-20 flex items-center justify-center gap-16">
                <div className="border-r-2 pe-16">
                    <img src={image} className="h-[200px]" alt="" />
                </div>
                <div className="font-semibold">
                    <p className="text-2xl">{name}</p>
                    <p className="text-lg mt-4">{email}</p>
                    <button className="underline text-yellow-600 mt-3" onClick={()=> setShowPassChange(true)}>Reset Password</button>
                    {showPassChange && <div className="mt-5">
                        <input className="block border-2 px-4 py-2 rounded-xl mb-4" type="password" name="pass" id="" onChange={e => setPass(e.target.value)} />
                        <button className="border px-2 py-1 rounded-lg ms-2" onClick={updatePassword} >Change</button>
                        <button className="border px-2 py-1 rounded-lg ms-2"  onClick={()=> setShowPassChange(false)}>Cancel</button>
                    </div>}
                </div>
            </div>

            {showEdit && <div className="my-16">
                <Divider />
                <div className="text-center mt-8">
                    <p className="text-xl font-semibold">Update your profile details</p>
                    <form onSubmit={handleProfileUpdate} className="w-[350px] mx-auto mt-8 text-left" action="">
                        <div>
                            <label className="block font-semibold" htmlFor="name">Update Name</label>
                            <input className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-2" type="text" name="name" defaultValue={name} />
                        </div>
                        <div className="mt-5">
                            <label className="block font-semibold" htmlFor="photo">Profile Image Url</label>
                            <input className="bg-[#e7eaf6] border-b border-gray-500 py-3 px-4 rounded-2xl placeholder:text-gray-500 placeholder:font-semibold w-full mt-2" type="text" name="photo" defaultValue={image} />
                        </div>
                        <button className="py-2 mt-5 hover:bg-[#385f86] transition-all duration-200 shadow-md bg-[#5585b5] rounded-xl w-full text-white" type="submit">
                            Update
                        </button>
                    </form>
                </div>
            </div>}
            <Toaster/>
        </div>
    );
};

export default Profile;