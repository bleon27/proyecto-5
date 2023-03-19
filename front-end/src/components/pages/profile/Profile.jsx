import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

import EditProfile from './EditProfile';
import EditPassword from './EditPassword';

export default function profile() {
    return (
        <>
            <Container className='my-5'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="editPerfil">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="editPerfil">Editar Perfil</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="editPassword">Cambiar Contraseña</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="editPerfil">
                                    <EditProfile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="editPassword">
                                    <EditPassword />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </>
    )
}