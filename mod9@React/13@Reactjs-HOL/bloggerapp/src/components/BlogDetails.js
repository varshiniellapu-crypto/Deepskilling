import React from "react";

function BlogDetails() {

    let showBlog = true;

    return (
        <div>

            <h2>Blog Details</h2>

            {
                showBlog &&
                <p>React Conditional Rendering Blog</p>
            }

        </div>
    );
}

export default BlogDetails;