import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const LoginForm = ({ show, handleClose }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState(t("email-validation"))
  const [passwordError, setPasswordError] = useState(t("password-validation"))
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
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.length > 8) {
      setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
      if (!e.target.value) {
        setPasswordError(t("password-validation"))
      }
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("login")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="fromBasicEmail">
            <Form.Label>{t("email")}</Form.Label>
            {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
            <Form.Control
              onChange={e => emailHandler(e)}
              name="email"
              value={email}
              onBlur={e => blurHandler(e)}
              type="email"
              placeholder={t("email")}
            />
            <Form.Text className="text-muted"> {t("never-share")} </Form.Text>
          </Form.Group>
          <Form.Group controlId="fromBasicPassword">
            <Form.Label>{t("password")}</Form.Label> {(passwordError && passwordDirty) &&
            <div style={{ color: "red" }}>{passwordError}</div>}
            <Form.Control
              onChange={e => passwordHandler(e)}
              name="password"
              value=""
              onBlur={e => blurHandler(e)}
              type="password"
              placeholder={t("password")}
            />
          </Form.Group>
          <Form.Group controlId="fromBasicCheckbox">
            <Form.Check type="checkbox" label={t("remember")} />
          </Form.Group>
          <Button disabled={!formValid} variant="primary" type="submit">{t("submit")}</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;