import React from 'react'
import Table from 'react-bootstrap/Table';

const CartResume = ({ resume }) => {

    return (
        <div>
            <Table className='w-100'>
                <tbody>
                    <tr>
                        <td>Monto de compra</td>
                        <td>$ {resume.amount}</td>
                    </tr>
                    <tr>
                        <td>Impuestos = {process.env.REACT_APP_TAX_PCTG}%</td>
                        <td>$ {resume.tax}</td>
                    </tr>
                    <tr>
                        <td>Total a pagar</td>
                        <td>$ {resume.total}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CartResume
