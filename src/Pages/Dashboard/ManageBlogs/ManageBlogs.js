import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Rating from 'react-rating';
import UseBlogs from '../../../Hooks/UseBlogs';

const ManageBlogs = () => {
    const [pageNumber,setPageNumber]=useState(0);
    const blogPerPage=10;
    const pagesVisited=pageNumber*blogPerPage;
    const [blogs]=UseBlogs();

    const pageCount=Math.ceil(blogs.length/blogPerPage);
        const changePage=({selected})=>{
            setPageNumber(selected)
        };

        const handleDelete=(id)=>{
            const proceed=window.confirm("Are You Sure ? Want To Delete ?");
            if (proceed){
                const url=`https://young-meadow-11819.herokuapp.com/deleteBlog/${id}`;
                fetch(url,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        window.alert('Deleted Successfully')
                    }
                    window.location.reload(false);
            });
            }
        };

        const handleUpdate=(id)=>{
            alert("Update Pending")
        }

    return (
        <div>
            <table className="min-w-full border-collapse block md:table mb-4">
                <thead className="block md:table-header-group">
                    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Place Image</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Travellar Name</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Places</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Duration</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Expense</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Travel Date</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ratings</th>
                        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                {
                    blogs.slice(pagesVisited, pagesVisited+blogPerPage).map(blog=>
                        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row" key={blog?._id}>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell pb-4">
                                <img className="w-20" src={blog?.url} alt="Places" />
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.by} </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.name}</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.duration}</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.cost}</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.date}</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <Rating className="mb-2 text-yellow-600" readonly emptySymbol="far fa-star" fullSymbol="fas fa-star" initialRating={blog.rating}>
                                </Rating>
                            </td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-1"
                                    onClick={()=>handleUpdate (blog?._id)}>
                                        Update
                                </button>
                                <button 
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-1"
                                    onClick={()=>handleDelete (blog?._id)}>
                                        Delete
                                </button>
                            </td>
                        </tr>	
                        )
                }	
                </tbody>
            </table>
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

export default ManageBlogs;