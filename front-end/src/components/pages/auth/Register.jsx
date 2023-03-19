import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import logo from '../../../img/logo2.png';
import { signup } from '../../../services/auth.services';

const Register = () => {
    let [nombres, setNombre] = useState("");
    let [apellidos, setApellidos] = useState("");
    let [edad, setEdad] = useState("");
    let [direccion, setDireccion] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const onSubmitSignup = async (event) => {
        event.preventDefault();
        const response = await signup(nombres, apellidos, edad, direccion, email, password);
        if (response.status === 200) {
            window.location.href = '/login';
        }
    }
    return (
        <>
            <div className='bg-auth'>
                <Container>
                    <Row id='register' className="align-items-center flex-column-reverse">
                        <Col md={6} lg={6} sm={6} className='d-flex justify-content-end pe-5'>
                            <Form style={{ maxWidth: '300px' }} onSubmit={onSubmitSignup}>
                                <h1 className='text-center fw-bolder text-white'>Registrate</h1>
                                <div className='text-center mb-2 text-white'>Ya estas registrado? <span className='link-light'>Iniciar sesion</span></div>
                                <Row>
                                    <Col md={12} lg={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label className='text-white'>Nombres</Form.Label>
                                            <Form.Control type="text" value={nombres} onChange={({ target }) => setNombre(target.value)} placeholder="Nombres" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} lg={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="apellidos">
                                            <Form.Label className='text-white'>Apellidos</Form.Label>
                                            <Form.Control type="text" value={apellidos} onChange={({ target }) => setApellidos(target.value)} placeholder="Apellidos" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} lg={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="edad">
                                            <Form.Label className='text-white'>Edad</Form.Label>
                                            <Form.Control type="text" value={edad} onChange={({ target }) => setEdad(target.value)} placeholder="Edad" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} lg={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="direccion">
                                            <Form.Label className='text-white'>Direccion</Form.Label>
                                            <Form.Control type="text" value={direccion} onChange={({ target }) => setDireccion(target.value)} placeholder="Direccion" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} lg={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label className='text-white'>Correo</Form.Label>
                                            <Form.Control type="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Correo" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12} lg={12} sm={12}>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label className='text-white'>Contraseña</Form.Label>
                                            <Form.Control type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Contraseña" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="dark w-100 mb-4" type="submit">
                                    Registrar
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
export default Register;