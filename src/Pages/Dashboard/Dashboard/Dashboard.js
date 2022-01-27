import React from 'react';
import {Route,Link, Routes} from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';

import DashboardHome from '../DashboardHome/DashboardHome';

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
            <main class="flex w-full h-screen">
                <aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
                    <div class="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div class="text-sm">
                            {user?.email?
                                <img className="w-12 h-12 mb-4 rounded-full mx-auto" src={user?.photoURL} alt="User" />
                            :""}
                            <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                <Link to="/"> Dashboard </Link>
                            </div>
                            <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                                <Link to="dashboard"> Make Admin </Link>
                            </div>
                        </div>

                        <div class="flex px-3 py-1 text-white bg-red-500 rounded cursor-pointer text-center text-sm"  onClick={handleSignOut}>
                            <button class="rounded inline-flex items-center">
                                <i className="fas fa-sign-out-alt text-white text-lg px-2"></i>
                                <span class="font-semibold">Logout</span>
                            </button>
                        </div>
                    </div>
                </aside>
                <section class="w-full p-4">
                    <Routes>
                        <Route path="/" element={<DashboardHome />}/>
                        
                    </Routes>
                </section>  
            </main>
        </>
    );
};

export default Dashboard;