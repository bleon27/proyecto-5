import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Product from './Product';
import { CartContext } from '../../../context/cartContext';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductList } from '../../../services/product.services';

export default function Products() {
    const { addItem } = useContext(CartContext)

    const { tipo } = useParams();
    const [products, setProducts] = useState([]);

    const loadProductList = async () => {
        const productList = await getProductList(tipo);
        if (productList.status === 200) {
            setProducts(productList.data.result['Products']);
        }
    }

    useEffect(() => {
        loadProductList();
    })

    const onProductAdded = (product) => {
        addItem(product)
    }

    return (
        <>
            <Container className='my-5'>
                <Row>
                    {
                        products && products.map((i) => {
                            return (
                                <Col key={i._id} xl={4} lg={4} md={6} sm={6} xs={12} className='px-3 py-3'>
                                    <Product id={i._id} image={i.image} title={i.title} description_short={i.description_short} price={i.price} onClic={onProductAdded} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}