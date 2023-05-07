import React from 'react';
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { blogPosts } from "../../utils/blogPosts.js";
import { blogCategory } from "../../utils/blogCategory.js";

const SingleBlog = () => {
  const { id } = useParams()
  const post = blogPosts.filter(item => item.id === +id)[0]
  const category = blogCategory.filter(item => item.id === post.categoryId)[0]

  return (
    <Container className="m-5 p-5">
      <h1>{post.title}</h1>
      <p>{category.name}</p>
      <p>{post.description}</p>
    </Container>
  );
};

export default SingleBlog;