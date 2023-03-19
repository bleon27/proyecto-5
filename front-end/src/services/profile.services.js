import axios from 'axios';

const API_URL = "http://localhost:9000";

export const getProfile = async () => {
    let token = localStorage.getItem("token");
    var config = {
        "headers": {
            "Authorization": "Bearer " + token
        }
    }

    const response = await axios.get(`${API_URL}/profile`, config);
    return response;
}

export const putProfile = async (id, names, lastnames, age, ci, address, postalCode, country, city) => {
    let token = localStorage.getItem("token");
    var config = {
        "headers": {
            "Authorization": "Bearer " + token
        }
    }
    var data = {
        "names": names,
        "lastnames": lastnames,
        "age": age,
        "ci": ci,
        "address": address,
        "postalCode": postalCode,
        "country": country,
        "city": city
    };
    const response = await axios.put(`${API_URL}/profile/${id}`, data, config);
    return response;
}