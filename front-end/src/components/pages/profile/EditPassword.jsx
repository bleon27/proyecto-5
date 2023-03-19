import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import { putPassword } from '../../../services/user.services';
import { UserContext } from '../../../context/userContext';

export default function EditPassword() {
    const { token, deleteSession } = useContext(UserContext);
    let [oldPassword, setOldPassword] = useState("");
    let [newPassword, setNewPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitProfile = async (event) => {
        event.preventDefault();
        const response = await putPassword(token, oldPassword, newPassword, confirmPassword);
        if (response.status === 200) {
            deleteSession(token)
            window.location.href = '/login';
        }
    }

    return (
        <div className='d-flex justify-content-center w-100'>
            <Form className='' style={{ width: '500px' }} onSubmit={onSubmitProfile}>
                <h2 className='text-center fw-bolder text-white'>Cambiar contraseña</h2>
                <div className='text-center mb-2 text-white'>Ya estas registrado? <span className='link-light'>Iniciar sesion</span></div>
                <Row>
                    <Col md={12}>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Contraseña antigua</Form.Label>
                            <Form.Control type="text" value={oldPassword} onChange={({ target }) => setOldPassword(target.value)} placeholder="Contraseña antigua" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Contraseña nueva</Form.Label>
                            <Form.Control type="password" value={newPassword} onChange={({ target }) => setNewPassword(target.value)} placeholder="Contraseña nueva" />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-white'>Confirmar Contraseña</Form.Label>
                            <Form.Control type="password" value={confirmPassword} onChange={({ target }) => setConfirmPassword(target.value)} placeholder="Confirmar Contraseña" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="dark w-100 mb-4" type="submit">
                    Acrualizar
                </Button>
            </Form>
        </div>
    )
}