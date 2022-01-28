import React, { useState } from 'react';
import './AddBlog.css';

const AddBlogs = () => {
    const[travellarName,setTravellarName]=useState("");
    const[destination,setDestination]=useState("");
    const[cost,setCost]=useState("");
    const[rating,setRating]=useState("");
    const[duration,setDuration]=useState("");
    const[date,setDate]=useState("");
    const[description,setDescription]=useState("");
    const[profile,setProfile]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!profile){
            alert("Please Select an Image")
            return;
        }
        const formData=new FormData();
        formData.append("url",profile);
        formData.append("name",destination);
        formData.append("description",description);
        formData.append("duration",duration);
        formData.append("cost",cost);
        formData.append("rating",rating);
        formData.append("by",travellarName);
        formData.append("date",date);
        
        fetch('http://localhost:5000/postBlog', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Rating Added")
            }
        })
        .catch(error => {
            alert('Error:', error);
        });
    }

    return (
        <div className="blog-container h-full pt-2">
            <section className="max-w-4xl mb-40 mt-20 p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="username">Travellar Name</label>
                            <input
                                onChange={e=>setTravellarName(e.target.value)}
                                type="text" 
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                placeholder="John Doe"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Destination Name</label>
                            <input
                                type="text" 
                                onChange={e=>setDestination(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                placeholder="Tokyo Japan"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="password">Total Cost (USD)</label>
                            <input 
                                type="number"
                                onChange={e=>setCost(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                placeholder="1100"/>
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">User Rating (Out Of 5)</label>
                            <input 
                                type="number" 
                                onChange={e=>setRating(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                placeholder="4"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Duration (How Many Days Stayed) </label>
                            <input  
                                type="number" 
                                onChange={e=>setDuration(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                placeholder="8"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Tour Date</label>
                            <input 
                                type="date" 
                                onChange={e=>setDate(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Description</label>
                            <textarea 
                                type="textarea" 
                                onChange={e=>setDescription(e.target.value)}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                placeholder="Tour Description">
                                
                            </textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">
                            Destination Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <i className="fas fa-image text-2xl text-white"></i>
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span className="">Upload Image</span>
                                <input 
                                    onChange={e=>setProfile(e.target.files[0])}
                                    id="file-upload" 
                                    name="file-upload" 
                                    type="file"
                                    accept="image/*" 
                                    className="sr-only"/>
                                </label>
                                <p className="pl-1 text-white">or drag and drop</p>
                            </div>
                            <p className="text-xs text-white">
                                PNG, JPG, GIF up to 10MB
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Post Blog</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddBlogs;