import React from 'react';
import UseBlogs from '../../../Hooks/UseBlogs';

const ManageBlogs = () => {
    const [blogs]=UseBlogs();

    return (
        <div>
            manage All Blogs
        </div>
    );
};

export default ManageBlogs;