import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';

export default function (props) {
    const [url, setUrl] = useState('');

    const Url = (() => {
        setUrl(`${window.location.protocol}//${window.location.host}`);
    })

    useEffect(() => {
        Url()
    }, []);

    return (
        <>
            <Card>
                <Card.Link href={`${url}/producto/${props.id}`}>
                    <Card.Img variant="top" className='py-3 px-3' src={process.env.REACT_APP_API_HOST + '' + props.image} />
                </Card.Link>
                <Card.Body>
                    <Card.Link className='text-dark text-decoration-none' href={`${url}/producto/${props.id}`}>
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Link>
                    <hr />
                    <Card.Text>
                        {props.description_short}
                    </Card.Text>
                    <Card.Text>
                        Precio: {props.price}$
                    </Card.Text>
                    <hr />
                    <div className='text-center'>
                        <Button onClick={() => props.onClic(props)} variant="dark" className=''>Agregar</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}