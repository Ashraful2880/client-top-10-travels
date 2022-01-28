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

    return (
        <div>
            <table class="min-w-full border-collapse block md:table mb-4">
                <thead class="block md:table-header-group">
                    <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Place Image</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Travellar Name</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Places</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Duration</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Expense</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Travel Date</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ratings</th>
                        <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody class="block md:table-row-group">
                {
                    blogs.slice(pagesVisited, pagesVisited+blogPerPage).map(blog=>
                        <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell pb-4">
                                <img className="w-20" src={blog?.url} alt="Places" />
                            </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.by} </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.name}</td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.duration}</td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.cost}</td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{blog?.date}</td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <Rating className="mb-2 text-yellow-600" readonly emptySymbol="far fa-star" fullSymbol="fas fa-star" initialRating={blog.rating}>
                                </Rating>
                            </td>
                            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                <span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-1">Update</button>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ml-1">Delete</button>
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