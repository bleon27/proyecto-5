import axios from 'axios';

const API_URL = process.env.REACT_APP_API_HOST;

export const getProductList = async (tipo) => {
    console.log(`${API_URL}/product/tipo/${tipo}`)
    const response = await axios.get(`${API_URL}/product/tipo/${tipo}`);
    return response;
}

export const getProduct = async (id) => {
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response;
}
