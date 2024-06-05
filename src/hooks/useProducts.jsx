import { useEffect, useState } from "react";

const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://e-library-server-i7c9.onrender.com/books")
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
    },[])

    return ({products, loading});
};

export default useProducts;