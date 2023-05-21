import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { blogPosts } from "../../utils/blogPosts.js";
import { blogCategory } from "../../utils/blogCategory.js";
import { useTranslation } from "react-i18next";
import { db } from "../../../firebase.js";
import { collection, addDoc, query, onSnapshot, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const SingleBlog = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState()
  const [comments, setComments] = useState([])
  const [count, setCount] = useState(localStorage.getItem('count') || 1)
  const { t } = useTranslation()
  const { id } = useParams()
  const post = blogPosts.filter(item => item.id === +id)[0]
  const category = blogCategory.filter(item => item.id === post.categoryId)[0]

  const handleOnChange = (event) => {
    setFormData(event.target.value)
  }

  const handleLocalStorage = () => {
    if (localStorage.getItem('count')) {
      localStorage.removeItem('count');
      localStorage.setItem('count', `${count}`)
    } else {
      localStorage.setItem('count', '1')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCount(+count + 1)
    handleLocalStorage()
    e.target.reset()

    await addDoc(collection(db, 'comments'), {
      title: count,
      description: formData,
      date: Date.now()
    })
  }

  const handleUpdate = async (e, id) => {
    e.preventDefault()
    handleShowEdit()
    e.target.reset()
    await updateDoc(doc(db, 'comments', id), {
      description: formData
    })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'comments', id))
  }

  const handleShowEdit = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('date', 'asc'))
    onSnapshot(q, (querySnapshot) => {
      setComments(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [])

  return (
    <Container className="m-5 p-5">
      <h1>{post.title}</h1>
      <p>{category.name}</p>
      <p>{post.description}</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="comment">
          <Form.Label>Коментар</Form.Label>
          <Form.Control
            type='hidden'
            name='id'
            defaultValue={Date.now()}
            onChange={handleOnChange}
          />
          <Form.Control
            as='textarea'
            name="textarea"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button className="mt-4" variant="primary" type="submit">{t("submit")}</Button>
      </Form>

      {comments.map(comment =>
        <div key={comment.id} className='mt-4'>
          <div onClick={handleShowEdit} className='d-flex gap-5'>
            <p className='mb-0'>Comment {comment.data.title}</p>
            <p className='mb-0'>{new Date(comment.data.date).toDateString()}</p>
          </div>

          {isVisible ?
            <form onSubmit={(e) => handleUpdate(e, comment.id)}>
              <textarea onChange={handleOnChange} name="textarea"></textarea>
              <Button className='d-block' type='submit'>Submit</Button>
            </form> :
            <p>{comment.data.description}</p>
          }
          {!isVisible &&
            <div className='d-flex'>
              <Button className='me-4' onClick={handleShowEdit}>Edit</Button>
              <Button onClick={() => handleDelete(comment.id)}>Delete</Button>
            </div>
          }
        </div>
      )}
    </Container>
  );
};

export default SingleBlog;