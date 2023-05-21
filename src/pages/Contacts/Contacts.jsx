import React, {useEffect, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Contacts = () => {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')
    const [textarea, setTextArea] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [textAreaDirty, setTextAreaDirty] = useState(false)
    const [emailError, setEmailError] = useState(t("email-validation"))
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
                    <Form.Label>{t("email")}</Form.Label>
                    {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                    <Form.Control
                        onChange={e => emailHandler(e)}
                        name="email"
                        value={email}
                        onBlur={e => blurHandler(e)}
                        type="email"
                        placeholder={t("email")}
                    />
                    <Form.Text className="text-muted">{t("never-share")}</Form.Text>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>{t("textarea")}</Form.Label> {(textAreaError && textAreaDirty) &&
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
                    <Form.Check type="checkbox" label={t("check")} />
                </Form.Group>
                <Button disabled={!formValid} variant="primary" type="submit">{t("submit")}</Button>
            </Form>
        </Container>
    );
};

export default Contacts;