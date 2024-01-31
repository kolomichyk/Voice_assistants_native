import axios from 'axios';

export const axiosInstance = axios.create({ 
    baseURL: 'http://192.168.2.208:8000/' 
});

export const minioInstance = axios.create({
    baseURL: 'http://192.168.2.208:9090/actionsimages'
});