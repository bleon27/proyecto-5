import axios from 'axios';

const API_URL = process.env.REACT_APP_API_HOST;

export const login = async (email, password) => {
    var data = {
        "email": email,
        "password": password
    };
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response;
}

export const signup = async (nombres, apellidos, edad, direccion, email, password) => {
    var data = {
        "names": nombres,
        "lastnames": apellidos,
        "age": edad,
        "address": direccion,
        "email": email,
        "password": password
    };
    const response = await axios.post(`${API_URL}/user`, data);
    return response;
}