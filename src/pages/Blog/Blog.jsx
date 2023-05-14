import React, { useState } from 'react';
import { Card, Container, ListGroup } from "react-bootstrap";
import { blogPosts } from "../../utils/blogPosts.js";
import PostItem from "./components/PostItem/index.js";
import { blogCategory } from "../../utils/blogCategory.js";
import BlogCategory from "./components/BlogCategory/index.js";
import './styles.css'
import Pagination from "../../components/Pagination/index.js";

const Blog = () => {
  const [category, setCategory] = useState(1)
  const [isSortedAsc, setIsSortedAsc] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = blogPosts.filter(post => post.categoryId === category).slice(indexOfFirstRecord,
    indexOfLastRecord);

  const filterByDate = () => {
    setIsSortedAsc(!isSortedAsc)
    return isSortedAsc ?
      blogPosts.sort((a, b) => new Date(a.date) - new Date(b.date)) :
      blogPosts.reverse();
  }

  const getTotalPages = () => {
    return Math.ceil(blogPosts.filter(post => post.categoryId === category).length / recordsPerPage)
  }

  const handleClickCategory = (id) => {
    setCategory(id)
  }

  return (
    <Container className="pt-5">
      <div className='sort' onClick={filterByDate}>Sort by date
        {isSortedAsc ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
          </svg>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
          </svg>
        }
      </div>
      <div className="row mt-5">
        <div className="col posts">
          {currentRecords.map(post =>
            post.categoryId === category &&
            <PostItem
              category={category}
              post={post}
              key={post.id}
            />
          )}
        </div>
        <div className="col">
          <h5 className="text-center mt-5">Категорії</h5>
          <Card>
            <ListGroup variant="flush" className='categories'>
              {blogCategory.map(category =>
                <BlogCategory
                  onClick={() => handleClickCategory(category.id)}
                  id={category.id}
                  name={category.name}
                  key={category.id}
                />
              )}
            </ListGroup>
          </Card>
          <Card className="mt-3 bg-light">
            <Card.Body>
              <Card.Title>Slide widget</Card.Title>
              <Card.Text> Lorem </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Pagination
        totalPages={getTotalPages()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Blog;