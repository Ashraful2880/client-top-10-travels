import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [pageNumber,setPageNumber]=useState(0);
    const blogPerPage=9;
    const pagesVisited=pageNumber*blogPerPage;

    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/blog')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    const pageCount=Math.ceil(blogs.length/blogPerPage);
        const changePage=({selected})=>{
            setPageNumber(selected)
        };
    return (
        <div className="container xl:w-full w-11/12 mx-auto pt-8">
            <h1 className="xl:text-4xl lg:text-4xl text-3xl sm:text-left text-center text-gray-600 font-extrabold sm:w-4/6 w-5/6 mx-auto sm:mx-0">Blog From Our Customer</h1>
            <div className="xl:flex lg:flex md:flex sm:flex flex-wrap justify-evenly pt-12 mx-1">
            {
                blogs.slice(pagesVisited, pagesVisited+blogPerPage).map(blog=>
                    <div className="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 max-w-sm mb-8 border-b border-gray-300 pb-6 mx-auto shadow-md" key={blog._id}>
                        <div className="w-full rounded h-56">
                            <img src={blog.url} alt="blog" className="object-cover h-full w-full overflow-hidden rounded shadow" />
                        </div>
                        <div className="flex w-full items-center justify-between pt-6 pb-1">
                            <p className="text-xl text-gray-800 px-2 font-bold">{blog.by}</p>
                            <div className="flex justify-center px-5">
                                <a href="test" className="mx-2">
                                    <i className="fab fa-facebook text-indigo-800 text-lg hover:scale-125"></i>
                                </a>
                                <a href="test" className="mx-2">
                                    <i className="fab fa-twitter text-indigo-800 text-lg hover:scale-125"></i>
                                </a>
                                <a href="test" className="mx-2">
                                    <i className="fab fa-instagram text-indigo-800 text-lg hover:scale-125"></i>
                                </a>
                            </div>
                        </div>
                        <div className="text-left px-2">
                            <p className="text-gray-600 pb-1 text-lg">{blog.name}</p>
                            <Rating className="mb-2 text-yellow-500" readonly emptySymbol="far fa-star" fullSymbol="fas fa-star" initialRating={blog.rating}>
                            </Rating>
                            <p className="text-sm text-gray-600 leading-6 font-normal">{blog.description}</p>
                            <Link to={`/details/${blog._id}`}>
                                <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg mt-4">Explore</button>
                            </Link>
                        </div>
                    </div>
                    )
            }
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
};

export default Blogs;