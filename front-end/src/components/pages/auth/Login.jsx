import React, { useState, useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import { login } from '../../../services/auth.services';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../../img/logo2.png';

const LoginView = () => {
    const { setupSession } = useContext(UserContext)
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const onChangePassword = ({ target }) => {
        setPassword(target.value);
    }

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        const response = await login(email, password);
        if (response.status === 200) {
            setupSession(response.data.result);
            window.location.href = '/';
        }
    }

    return (
        <>
            <div className='bg-auth'>
                <Container>
                    <Row id='login' className="align-items-center flex-column-reverse">
                        <Col md={6} lg={6} sm={6} className='d-flex justify-content-end pe-5'>
                            <Form style={{ minWidth: '300px' }} onSubmit={onSubmitLogin}>
                                <h1 className='text-center fw-bolder text-white'>Ingreso</h1>
                                <div className='text-center mb-2 text-white'>Aun no estas registrado? <span className='link-light'>Registrate</span></div>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Ingresa tu email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" value={password} onChange={onChangePassword} placeholder="Ingresa tu contraseña" />
                                </Form.Group>
                                <Button variant="dark w-100 mb-4" type="submit">
                                    Entrar
                                </Button>
                            </Form>
                        </Col>
                        <Col md={6} lg={6} sm={6} className="d-flex align-items-center content-logo ps-5">
                            <img
                                alt=""
                                src={logo}
                                width="auto"
                                className="d-inline-block align-top"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LoginView