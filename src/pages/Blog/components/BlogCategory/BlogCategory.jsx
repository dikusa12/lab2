import React from 'react';
import {ListGroup} from "react-bootstrap";

const BlogCategory = ({ name, onClick, active }) => {
    return (
        <ListGroup.Item className={active && 'active'} onClick={onClick}>{name}</ListGroup.Item>
    );
};

export default BlogCategory;