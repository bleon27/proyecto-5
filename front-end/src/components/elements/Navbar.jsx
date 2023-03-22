import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { CartContext } from '../../context/cartContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

import { accountInfo } from '../../services/user.services';

function NavbarGeneral() {
    const { token, deleteSession } = useContext(UserContext);
    const [user, setUser] = useState(null)
    const { cart, getQuantity } = useContext(CartContext)

    const loadAccountInfo = async (token) => {
        const response = await accountInfo(token);
        if (response.status === 200) {
            setUser(response.data);
        }
    }

    const signOff = () => {
        deleteSession();
        window.location.href = '/';
    }

    useEffect(() => {
        if (token != null)
            loadAccountInfo(token)
    }, [token])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                        />{' Music Shop'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/productos/tipo/Todo">Catalogo</Nav.Link>
                            <Nav.Link href="/productos/tipo/Guitarras electricas">Guitarras Electricas</Nav.Link>
                            <Nav.Link href="/productos/tipo/Guitarras acusticas">Guitarras Acusticas</Nav.Link>
                            <Nav.Link href="/productos/tipo/Amplificador">Amplificadores</Nav.Link>
                            <Nav.Link href="/productos/tipo/Cuerdas">Cuerdas</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                token
                                    ?
                                    user &&
                                    <NavDropdown title={user.names + ' ' + user.lastnames} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                                        <NavDropdown.Item onClick={signOff}>Salir</NavDropdown.Item>
                                    </NavDropdown>
                                    : <NavDropdown title="Identificate" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/login">Iniciar sesion</NavDropdown.Item>
                                        <NavDropdown.Item href="/registro">Registrate</NavDropdown.Item>
                                    </NavDropdown>
                            }
                            <Nav.Link className='position-relative' href="/checkout"><FontAwesomeIcon icon={faCartShopping} />{cart && <Badge className='position-absolute top-0'>{getQuantity()}</Badge>}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarGeneral;