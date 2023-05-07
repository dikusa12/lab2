import React from 'react';
import {ListGroup} from "react-bootstrap";

const BlogCategory = ({ name, onClick }) => {
    return (
        <ListGroup.Item onClick={onClick}>{name}</ListGroup.Item>
    );
};

export default BlogCategory;