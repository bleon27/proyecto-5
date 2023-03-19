import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../services/product.services';
import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../context/cartContext';

export default function () {
    const { addItem } = useContext(CartContext)
    const { id } = useParams();
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [mark, setMark] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    const loadProduct = async () => {
        const prod = await getProduct(id);
        if (prod.status === 200) {
            setImage(process.env.REACT_APP_API_HOST + '' + prod.data.product.image);
            setDescription(prod.data.product.description);
            setMark(prod.data.product.mark);
            setPrice(prod.data.product.price);
            setTitle(prod.data.product.title);
        }
    }

    const onProductAdded = () => {
        addItem({
            id: id,
            title: title,
            price: price
        })
    }

    useEffect(() => {
        loadProduct();
    }, [])

    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                        <div className='rounded py-3 px-3' style={{ maxHeight: '500px', width: 'fit-content' }}>
                            <Image
                                className='rounded'
                                alt=""
                                src={image}
                                fluid
                            />
                        </div>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className='mt-5'>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className='mt-3'>
                                <h2 className='text-white-90'>{title}</h2>
                                <p className='text-white-90 fs-6 mt-4'>
                                    {description}
                                </p>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <p className='text-white-90 fs-6 mt-3 fw-semibold'>
                                    Marca: <span className='fw-light'>{mark}</span>
                                </p>
                                <p className='text-white-90 fs-6 mt-3 fw-semibold'>
                                    Precio: <span className='fw-light'>{price}$</span>
                                </p>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className='py-3 text-center'>
                                {/*
                                <div className='d-flex justify-content-start'>
                                    <div className='mx-3'>
                                        <p className='text-white-90 fs-5 mt-4'>
                                            Color Cuerpo
                                        </p>
                                        <div className="radio position-relative px-2">
                                            <input className='rounded-circle mx-1' type="radio" id="male" name="color-body" value="male" />
                                            <input className='rounded-circle mx-1' type="radio" id="female" name="color-body" value="female" />
                                            <input className='rounded-circle mx-1' type="radio" id="other" name="color-body" />
                                        </div>
                                    </div>
                                    <div className='mx-3'>
                                        <p className='text-white-90 fs-5 mt-4'>
                                            Color Mastil
                                        </p>
                                        <div className="radio position-relative px-2">
                                            <input className='rounded-circle mx-1' type="radio" id="male" name="color-Fingerboard" value="male" />
                                            <input className='rounded-circle mx-1' type="radio" id="female" name="color-Fingerboard" value="female" />
                                            <input className='rounded-circle mx-1' type="radio" id="other" name="color-Fingerboard" />
                                        </div>
                                    </div>
                                </div>
                            */}
                                <Button onClick={onProductAdded} variant="dark" className='mt-3'>Agregar al carrito</Button>{' '}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}