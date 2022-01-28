import React, { useEffect, useState } from 'react';
import {Route,Link, Routes} from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';
import AddBlogs from '../AddBlogs/AddBlogs';

import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageBlogs from '../ManageBlogs/ManageBlogs';

const Dashboard = () => {
   
    const {user,handleSignOut}=useAuth();
    const[admin,setAdmin]=useState(false);
//<----------------- Load Admin Data From Database --------------->
    useEffect(()=>{
        fetch(`https://young-meadow-11819.herokuapp.com/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email]);

   const toogleMenu=()=>{
       const toggleButton=document.getElementById("toogleDashboard");
       if (toggleButton.style.display === "none") {
        toggleButton.style.display = "block";
      } else {
        toggleButton.style.display = "none";
      }
   }

    return (
        <>
            <button 
                onClick={toogleMenu}
                type="button" 
                className="fixed left-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <i className="fas fa-bars text-2xl px-2"></i>
            </button>
            <main className="flex w-full h-full">
                <aside className="w-80 h-full bg-gray shadow-md" id="toogleDashboard">
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div className="text-sm">
                            {user?.email?
                                <img className="w-12 h-12 mb-4 rounded-full mx-auto" src={user?.photoURL} alt="User" />
                                :""}
                            <Link to="/dashboard"> 
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Dashboard 
                                </div>
                            </Link>
                            <Link to="addblog">
                                <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Post Blog
                                </div>
                            </Link>
                            {admin&&
                            <>
                                <Link to="manageBlog">
                                    <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Manage Blogs
                                    </div>
                                </Link>
                                
                                <Link to="makeAdmin">
                                    <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Make Admin
                                    </div>
                                </Link>
                            </>
                            }
                        </div>

                        <div className="flex px-3 py-1 text-white bg-red-500 rounded cursor-pointer text-center text-sm"  onClick={handleSignOut}>
                            <button className="rounded inline-flex items-center">
                                <i className="fas fa-sign-out-alt text-white text-lg px-2"></i>
                                <span className="font-semibold">Logout</span>
                            </button>
                        </div>
                    </div>
                </aside>
                <section className="w-full">
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