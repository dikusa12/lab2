import React, {useEffect, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";

const Contacts = () => {
    const [email, setEmail] = useState('')
    const [textarea, setTextArea] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [textAreaDirty, setTextAreaDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не може бути порожнім')
    const [textAreaError, setTextAreaError] = useState('Це поле має бути заповненим')
    const [formValid, setFormValid] = useState(false)

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setTextArea(e.target.value)
        if (e.target.length < 20) {
            setTextAreaError('Поле має містити не менше 20 символів')
            if (!e.target.value) {
                setTextAreaError('Поле не може бути пустим')
            }
        } else {
            setTextAreaError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setTextAreaDirty(true)
                break
        }
    }

    useEffect(() => {
        if (emailError || textAreaError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, textAreaError])

    return (
        <Container>
            <Form className='mt-5 pt-5 w-50'>
                <Form.Group controlId="fromBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                    <Form.Control
                        onChange={e => emailHandler(e)}
                        name="email"
                        value={email}
                        onBlur={e => blurHandler(e)}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Example textarea</Form.Label> {(textAreaError && textAreaDirty) &&
                    <div style={{color: "red"}}>{textAreaError}</div>}
                    <Form.Control
                        as='textarea'
                        onChange={e => passwordHandler(e)}
                        name="textarea"
                        value={textarea}
                        onBlur={e => blurHandler(e)}
                    />
                </Form.Group>
                <Form.Group controlId="fromBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button disabled={!formValid} variant="primary" type="submit"> Submit </Button>
            </Form>
        </Container>
    );
};

export default Contacts;