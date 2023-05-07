import React, {useState} from 'react';
import {Card, Container, ListGroup} from "react-bootstrap";
import {blogPosts} from "../../utils/blogPosts.js";
import PostItem from "./components/PostItem/index.js";
import {blogCategory} from "../../utils/blogCategory.js";
import BlogCategory from "./components/BlogCategory/index.js";

const Blog = () => {
    const [category, setCategory] = useState(1)

    const handleClickCategory = (id) => {
        setCategory(id)
    }

    return (
        <Container className="pt-5">
            <div className="row mt-5">
                <div className="col">
                    {blogPosts.map(post =>
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
                        <ListGroup variant="flush">
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
        </Container>
    );
};

export default Blog;