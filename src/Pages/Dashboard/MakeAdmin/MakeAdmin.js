import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [adminEmail,setAdminEmail]=useState('');
    const handleAdminEmail=event=>{
        setAdminEmail(event.target.value)
    }
    const handleMakeAdmin=event=>{
        event.preventDefault();
        const admin={email:adminEmail}
        fetch('https://young-meadow-11819.herokuapp.com/users/admin',{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.acknowledged){
                alert("Successfully MAke Successfull");
                setAdminEmail('');
            }
        })
    }
    return (
       <div className="admin-container h-full">
            <form className="lg:pt-52 md:pt-40 sm:pt-16" onSubmit={handleMakeAdmin}>
                <h1 className="text-white mb-6 text-2xl font-bold">You Can make Admin By Registered Email</h1>
                <input
                    onBlur={handleAdminEmail} 
                    className="text-gray-600 focus:ring-2 focus:ring-indigo-700 dark:text-gray-400 focus:outline-none dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal py-2 px-12 text-sm mr-3 border-gray-300 rounded border shadow " 
                    placeholder="Enter New Admin Email" />
                <input 
                    className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg ml-3" 
                    type="submit"
                    value="Confirm" />
            </form>
       </div>
    );
};

export default MakeAdmin;