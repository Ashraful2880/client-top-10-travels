import { useEffect, useState } from "react";


const UseBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return [blogs, setBlogs]
};

export default UseBlogs;