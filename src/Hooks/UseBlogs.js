import { useEffect, useState } from "react";


const UseBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://young-meadow-11819.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return [blogs, setBlogs]
};

export default UseBlogs;