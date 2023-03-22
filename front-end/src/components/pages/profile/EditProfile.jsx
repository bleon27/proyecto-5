import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { getProfile, putProfile } from '../../../services/profile.services';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function EditProfile() {
    const MySwal = withReactContent(Swal)
    let [id, setId] = useState("");
    let [names, setNames] = useState("");
    let [lastnames, setLastnames] = useState("");
    let [age, setAge] = useState("");
    let [ci, setCi] = useState("");
    let [address, setAddress] = useState("");
    let [postalCode, setPostalCode] = useState("");
    let [country, setCountry] = useState("");
    let [city, setCity] = useState("");

    const loadProfile = async () => {
        const profile = await getProfile();
        if (profile.status === 200) {
            setId(profile.data.result._id);
            setNames(profile.data.result.names);
            setLastnames(profile.data.result.lastnames);
            setAge(profile.data.result.age);
            setCi(profile.data.result.ci || '');
            setAddress(profile.data.result.address || '');
            setPostalCode(profile.data.result.postal_code || '');
            setCountry(profile.data.result.country || '');
            setCity(profile.data.result.city || '');
        }
    }

    useEffect(() => {
        loadProfile();
    }, [])

    const onSubmitProfile = async (event) => {
        event.preventDefault();
        const response = await putProfile(id, names, lastnames, age, ci, address, postalCode, country, city);
        if (response.status === 200) {
            MySwal.fire({
                //title: <strong>Actualizacion</strong>,
                html: <>Actualización exitosa</>,
                icon: 'success'
            })
        }
    }

    return (
        <>
            <Form onSubmit={onSubmitProfile}>
                <h2 className='text-center fw-bolder text-white'>Editar perfil</h2>
                <div className='text-center mb-2 text-white'>Ya estas registrado? <span className='link-light'>Iniciar sesion</span></div>
                <Row>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className='text-white'>Nombres</Form.Label>
                            <Form.Control type="text" value={names} onChange={({ target }) => setNames(target.value)} placeholder="Nombres" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="apellidos">
                            <Form.Label className='text-white'>Apellidos</Form.Label>
                            <Form.Control type="text" value={lastnames} onChange={({ target }) => setLastnames(target.value)} placeholder="Apellidos" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="edad">
                            <Form.Label className='text-white'>Edad</Form.Label>
                            <Form.Control type="text" value={age} onChange={({ target }) => setAge(target.value)} placeholder="Edad" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="cedula">
                            <Form.Label className='text-white'>Cédula o RUC</Form.Label>
                            <Form.Control type="text" value={ci} onChange={({ target }) => setCi(target.value)} placeholder="Cédula" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className='text-white'>Direccion</Form.Label>
                            <Form.Control type="text" value={address} onChange={({ target }) => setAddress(target.value)} placeholder="Direccion" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className='text-white'>Codigo postal</Form.Label>
                            <Form.Control type="text" value={postalCode} onChange={({ target }) => setPostalCode(target.value)} placeholder="Codigo Postal" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className='text-white'>Pais</Form.Label>
                            <Form.Control type="text" value={country} onChange={({ target }) => setCountry(target.value)} placeholder="Pais" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6} sm={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className='text-white'>Ciudad</Form.Label>
                            <Form.Control type="text" value={city} onChange={({ target }) => setCity(target.value)} placeholder="Ciudad" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="dark w-100 mb-4" type="submit">
                    Acrualizar
                </Button>
            </Form>
        </>
    )
}
