import axios from 'axios';

const API_URL = "http://localhost:9000";

export const getProductList = async (tipo) => {

    const response = await axios.get(`${API_URL}/product/tipo/${tipo}`);
    return response;
}

export const getProduct = async (id) => {
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response;
}
