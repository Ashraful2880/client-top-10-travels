import { useEffect, useState } from "react";


const UseBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return [blogs, setBlogs]
};

export default UseBlogs;