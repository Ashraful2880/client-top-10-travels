import React from 'react';
import {Route,Link, Routes} from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';
import AddBlogs from '../AddBlogs/AddBlogs';

import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageBlogs from '../ManageBlogs/ManageBlogs';

const Dashboard = () => {
   
    const {user,handleSignOut}=useAuth();
//<----------------- Load Admin Data From Database --------------->
   

   const myFunction=()=>{
       const toggleButton=document.getElementById("toogleDiv");
       if (toggleButton.style.display === "none") {
        toggleButton.style.display = "block";
      } else {
        toggleButton.style.display = "none";
      }
   }

    return (
        <>
            <main className="flex w-full h-screen">
                <aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div className="text-sm">
                            {user?.email?
                                <img className="w-12 h-12 mb-4 rounded-full mx-auto" src={user?.photoURL} alt="User" />
                            :""}
                            <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                <Link to="/dashboard"> Dashboard </Link>
                            </div>
                            <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                <Link to="manageBlog"> Manage Blogs</Link>
                            </div>
                            <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                <Link to="addblog"> Add Blog</Link>
                            </div>
                            <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                <Link to="makeAdmin"> Make Admin</Link>
                            </div>
                        </div>

                        <div className="flex px-3 py-1 text-white bg-red-500 rounded cursor-pointer text-center text-sm"  onClick={handleSignOut}>
                            <button className="rounded inline-flex items-center">
                                <i className="fas fa-sign-out-alt text-white text-lg px-2"></i>
                                <span className="font-semibold">Logout</span>
                            </button>
                        </div>
                    </div>
                </aside>
                <section className="w-full p-4">
                    <Routes>
                        <Route path="/" element={<DashboardHome />}/>
                        <Route path="manageBlog" element={<ManageBlogs />}/>
                        <Route path="addblog" element={<AddBlogs />}/>
                        <Route path="makeAdmin" element={<MakeAdmin />}/>
                    </Routes>
                </section>  
            </main>
        </>
    );
};

export default Dashboard;