import React, { useContext } from 'react'
import { Button } from "react-bootstrap";
import { CartContext } from '../../../context/cartContext';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';

const CartItem = ({ product, cartData }) => {
    const { deleteItem, addItem, decreaseItem } = useContext(CartContext)

    return (
        <>
            <tr>
                <td style={{ verticalAlign: 'middle' }} width='150'>
                    <Image
                        alt=""
                        src={process.env.REACT_APP_API_HOST + '' + product.image}
                        fluid
                    />
                </td>
                <td style={{ verticalAlign: 'middle' }}>{product.title}</td>
                <td style={{ verticalAlign: 'middle' }}>{product.price}</td>
                <td style={{ verticalAlign: 'middle' }}>
                    <InputGroup>
                        <Button onClick={() => decreaseItem(product)} variant="dark" size="sm">-</Button>
                        <div className='form-control form-control-sm'>{cartData.quantity}</div>
                        <Button onClick={() => addItem(product)} variant="dark" size="sm">+</Button>
                    </InputGroup>
                </td>
                <td style={{ verticalAlign: 'middle' }}>
                    <Button onClick={() => deleteItem(product._id)} variant="danger" size="sm">x</Button>
                </td>
            </tr>
        </>
    )
}

export default CartItem
