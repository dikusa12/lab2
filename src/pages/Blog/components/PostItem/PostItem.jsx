import React from 'react';
import {blogCategory} from "../../../../utils/blogCategory.js";
import {useNavigate} from "react-router-dom";

const PostItem = ({post}) => {
    const {title, preview, categoryId, id} = post;
    const categoryName = blogCategory.filter(item => item.id === categoryId)[0].name
    const navigate = useNavigate();

    const navigateToSingleBlog = () => {
        navigate('/blog/' + id)
    }

    return (
        <div onClick={navigateToSingleBlog} className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
                <img
                    width={150}
                    height={150}
                    className="mr-3"
                    src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                    alt="photo"
                />
            </div>
            <div className="flex-grow-1 ms-3">
                <h5>{title}</h5>
                <p> {preview} </p>
                <p> {categoryName} </p>
            </div>
        </div>
    );
};

export default PostItem;