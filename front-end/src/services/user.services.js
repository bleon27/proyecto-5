import axios from 'axios';

const API_URL = "http://localhost:9000";

export const accountInfo = async (token) => {
    var config = {
        "headers": {
            "Authorization": "Bearer " + token
        }
    }

    const response = await axios.get(`${API_URL}/user/account/info`, config);
    return response;
}

export const putPassword = async (token, oldPassword, newPassword, confirmPassword) => {
    var config = {
        "headers": {
            "Authorization": "Bearer " + token
        }
    }
    var data = {
        "oldPassword": oldPassword,
        "newPassword": newPassword,
        "confirmPassword": confirmPassword,
    };
    const response = await axios.put(`${API_URL}/user/password/1`, data, config);
    return response;
}