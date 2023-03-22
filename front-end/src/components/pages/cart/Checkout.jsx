import React, { useState, useEffect, useContext } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../../../context/cartContext';
import CartItem from './CartItem';
import { getProductList } from '../../../services/product.services';
import CartResume from './CartResume';
import Paypal from '../../partials/Paypal';
import { UserContext } from '../../../context/userContext';

export default function Checkout() {
    const { token } = useContext(UserContext);
    const { cart, cartResume } = useContext(CartContext)
    const [productList, setProductList] = useState([])

    const loadProducts = async () => {
        const response = await getProductList('Todo');
        if (response.status === 200) {
            setProductList(response.data.result.Products);
        }

    };

    const findProduct = (sku) => {
        return productList.find(prod => prod._id === sku)
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const handleOnPaid = (response) => {
        console.log("PAYPAL RESPONSE", response)
    }


    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col xl={8} lg={7} md={7} sm={12} xs={12} className='px-3 py-3'>
                        <Card>
                            <Card.Header>Carrito de compras</Card.Header>
                            <Card.Body>
                                <Table responsive hover striped className='w-100'>
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Descripcion</th>
                                            <th>Precio</th>
                                            <th>canntidad </th>
                                            <th>Accion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productList.length === false ? (
                                                <tr><td align='center' colSpan={5}>Carrito vacio</td></tr>
                                            )
                                                : cart === false ? (
                                                    <tr><td align='center' colSpan={5}>Carrito vacio</td></tr>
                                                )
                                                    : (
                                                        cart.map(item => {
                                                            var product = findProduct(item.id)
                                                            return (
                                                                <CartItem key={item.id} product={product} cartData={item} />
                                                            )
                                                        })
                                                    )
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={5} md={5} sm={12} xs={12} className='px-3 py-3'>
                        <Card>
                            <Card.Header>Total a pagar</Card.Header>
                            <Card.Body>
                                {
                                    cartResume && (
                                        <CartResume resume={cartResume} />
                                    )
                                }
                                <div className='mt-4 mx-3'>
                                    {
                                        cartResume && token && (
                                            <PayPalScriptProvider
                                                options={{
                                                    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                                                    components: "buttons",
                                                    currency: "USD"
                                                }}
                                            >
                                                <Paypal
                                                    currency={"USD"}
                                                    amount={cartResume.total}
                                                    onPaid={handleOnPaid}
                                                    showSpinner={true}
                                                    cart={cart}
                                                />
                                            </PayPalScriptProvider>
                                        )
                                    }
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}